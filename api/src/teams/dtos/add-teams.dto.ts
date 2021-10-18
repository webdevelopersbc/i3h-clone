import { Type } from 'class-transformer';
import { ArrayNotEmpty, ValidateNested } from 'class-validator';
import { ClubDto } from './club.dto';

export class AddTeamsDto {
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ClubDto)
  teams: ClubDto[];
}
