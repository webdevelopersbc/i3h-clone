import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import {
  IMatchClubDetails,
  MatchClubDetailsApiDto,
} from './match-club-details.dto';

export class MatchClubInfoApiDto {
  @IsString()
  cNhlOnlineGameType: string;

  @IsString()
  losses: string;

  @IsString()
  memberString: string;

  @IsString()
  ppg: string;

  @IsString()
  ppo: string;

  @IsString()
  result: string;

  @IsString()
  score: string;

  @IsString()
  teamSide: string;

  @IsString()
  toa: string;

  @IsString()
  winnerByDnf: string;

  @IsString()
  winnerByGoalieDnf: string;

  @ValidateNested()
  @Type(() => MatchClubDetailsApiDto)
  details: MatchClubDetailsApiDto;

  @IsString()
  goals: string;

  @IsString()
  goalsAgainst: string;
}

export interface IMatchClubInfo {
  cNhlOnlineGameType: string;
  losses: string;
  memberString: string;
  ppg: string;
  ppo: string;
  result: string;
  score: string;
  teamSide: string;
  toa: string;
  winnerByDnf: string;
  winnerByGoalieDnf: string;
  details: IMatchClubDetails;
  goals: string;
  goalsAgainst: string;
}
