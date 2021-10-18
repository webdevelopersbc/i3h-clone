import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  isAdmin: boolean;
}
