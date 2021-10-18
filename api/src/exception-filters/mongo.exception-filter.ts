import { ArgumentsHost, Catch, ExceptionFilter, ConflictException } from '@nestjs/common';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    switch (exception.code) {
      case 11000:
      // duplicate exception
      const error = new ConflictException();
      response.status(error.getStatus()).json({});
    }
  }
}
