import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { MatchTimeAgoApiDto } from 'src/nhlapi/dtos/match-time-ago.dto';
import { MatchClubInfoApiDto } from './ match-club-info.dto';
import { MatchAggregateDto } from './match-aggregate.dto';
import { MatchPlayerApiDto } from './match-player.dto';

export class MatchApiDto {
  @IsString()
  matchId: string;

  @IsNumber()
  timestamp: number;

  @ValidateNested()
  @Type(() => MatchTimeAgoApiDto)
  timeAgo: MatchTimeAgoApiDto;

  @ValidateNested({ each: true })
  clubs: { [key: string]: MatchClubInfoApiDto };

  @ValidateNested()
  players: { [key: string]: MatchPlayerApiDto };

  @ValidateNested({ each: true })
  aggregate: { [key: string]: MatchAggregateDto };
}

export class MatchListApiDto {
  @ValidateNested({ each: true })
  @Type(() => MatchApiDto)
  matches: MatchApiDto[];
}
