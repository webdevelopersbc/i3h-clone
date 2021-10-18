import { IsNotEmpty, IsString } from 'class-validator';

export class AppSettingsDto {
  @IsString()
  @IsNotEmpty()
  timeOfDay: string;

  @IsString()
  @IsNotEmpty()
  timeZone: string;
}
