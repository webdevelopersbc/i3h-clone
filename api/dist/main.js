"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const sslRedirect = require("heroku-ssl-redirect");
const app_module_1 = require("./app.module");
const angular_front_end_middleware_1 = require("./middlewares/angular-front-end.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    const port = process.env.PORT || 3000;
    app.use(sslRedirect());
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
    }));
    app.use(helmet());
    app.use(compression());
    app.enableCors();
    app.use(angular_front_end_middleware_1.FrontEndMiddleware);
    app.setGlobalPrefix(globalPrefix);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    await app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map