import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { IMatchPlayer, MatchPlayerApiDto } from './match-player.dto';

export class MatchPlayerContainerDto {
  @ValidateNested({ each: true })
  @Type(() => MatchPlayerApiDto)
  players: { [key: string]: MatchPlayerApiDto };
}

export interface IMatchPlayerContainer {
  players: { [key: string]: IMatchPlayer };
}
