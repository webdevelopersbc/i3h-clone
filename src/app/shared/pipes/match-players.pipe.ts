import { Pipe, PipeTransform } from '@angular/core';
import { Match } from '../models/match';

@Pipe({
  name: 'matchPlayers',
})
export class MatchPlayersPipe implements PipeTransform {
  transform(match: Match, clubIndex: number): { [key: string]: string }[] {
    const playersSet = Object.keys(match.players).map(key => match.players[key]);
    const players = playersSet[clubIndex]
      ? Object.keys(playersSet[clubIndex]).map(key => playersSet[clubIndex][key])
      : null;
    return players;
  }
}
