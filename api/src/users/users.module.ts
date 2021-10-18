import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppUser, AppUserSchema } from './schemas/app-user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AppUser.name, schema: AppUserSchema }]),
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
