import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CustomKitDto } from './custom-kit.dto';

export class ClubDto {
  @IsNotEmpty()
  clubId: number;

  @IsNotEmpty()
  platform: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  regionId: number;

  @IsNotEmpty()
  teamId: number;

  @ValidateNested()
  @Type(() => CustomKitDto)
  customKit: CustomKitDto;
}
