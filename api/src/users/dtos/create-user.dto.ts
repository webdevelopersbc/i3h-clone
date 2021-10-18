import { IsEmail, IsNotEmpty } from 'class-validator';
import {Transform} from 'class-transformer';

export class CreateUserDTO {
  @IsEmail()
  @Transform((email: string) => email.toLowerCase())
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  password: string;
}
