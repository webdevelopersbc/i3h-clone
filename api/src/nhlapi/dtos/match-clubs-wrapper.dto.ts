import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { IMatchClubInfo, MatchClubInfoApiDto } from './ match-club-info.dto';

export class MatchClubsContainerDto {
  @ValidateNested({ each: true })
  @Type(() => MatchClubInfoApiDto)
  clubs: { [key: string]: MatchClubInfoApiDto };
}

export interface IMatchClubsContainerDto {
  clubs: { [key: string]: IMatchClubInfo };
}
