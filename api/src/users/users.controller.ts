import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdateUserDTO } from './dtos/update-user.dtos';
import { AppUser } from './schemas/app-user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<AppUser[]> {
    return this.userService.findAll();
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Body() update: UpdateUserDTO,
    @Param('id') id: string,
  ): Promise<AppUser[]> {
    await this.userService.update(update, id);
    return this.userService.findAll();
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string): Promise<AppUser[]> {
    await this.userService.delete(id);
    return this.userService.findAll();
  }
}
