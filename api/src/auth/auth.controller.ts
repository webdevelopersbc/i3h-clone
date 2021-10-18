import {
  Body,
  Controller,
  Post,
  Request,
  UseFilters,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MongoExceptionFilter } from 'src/exception-filters/mongo.exception-filter';
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(
    @Request() req: Express.Request,
  ): Promise<{ access_token: string }> {
    return this.authService.login(req.user);
  }

  @Post('register')
  @UseFilters(MongoExceptionFilter)
  async register(@Body() registration: CreateUserDTO): Promise<void> {
    await this.userService.create(registration);
  }
}
