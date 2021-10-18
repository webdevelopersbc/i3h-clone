// Environment variable configuraiton must be first
require('dotenv').config();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import * as sslRedirect from 'heroku-ssl-redirect';
import { AppModule } from './app.module';
import { FrontEndMiddleware } from './middlewares/angular-front-end.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const port = process.env.PORT || 3000;

  app.use(sslRedirect());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  app.use(helmet());
  app.use(compression());
  app.enableCors();
  app.use(FrontEndMiddleware);
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}
bootstrap();
