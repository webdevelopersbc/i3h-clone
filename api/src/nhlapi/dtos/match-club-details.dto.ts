import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import {
  IMatchClubCustomKit,
  MatchClubCustomKitApiDto,
} from './match-club-kit.dto';

export class MatchClubDetailsApiDto {
  @IsString()
  name: string;

  @IsNumber()
  clubId: number;

  @IsNumber()
  regionId: number;

  @IsNumber()
  teamId: number;

  @ValidateNested()
  @Type(() => MatchClubCustomKitApiDto)
  customKit: MatchClubCustomKitApiDto;
}

export interface IMatchClubDetails {
  name: string;
  clubId: number;
  regionId: number;
  teamId: number;
  customKit: IMatchClubCustomKit;
}
