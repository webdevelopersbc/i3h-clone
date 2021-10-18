import { Pipe, PipeTransform } from '@angular/core';
import { Match } from '../models/match';

@Pipe({
  name: 'matchFilter',
})
export class MatchFilterPipe implements PipeTransform {
  transform(match: Match, clubIndex: number, stat: string): string {
    const clubs = Object.keys(match.clubs).map(key => match.clubs[key]);
    const agg = match.aggregate ? Object.keys(match.aggregate).map(key => match.aggregate[key]) : null;

    switch (stat) {
      case 'name':
        return clubs[clubIndex]?.details?.name || 'Disbanded / Unkown';
      case 'goals':
        return clubs[clubIndex]?.goals;
      case 'timeago':
        return `${match.timeAgo.number} ${match.timeAgo.unit} ago`;
      case 'crest':
        if (!clubs[clubIndex]?.details?.customKit) {
          return 'https://media.contentapi.ea.com/content/dam/ea/nhl/nhl-20/common/pro-clubs/t1000.png';
        }

        const baseAsset = clubs[clubIndex]?.details.customKit.useBaseAsset === '1';
        const crestId = baseAsset
          ? clubs[clubIndex]?.details.customKit.crestAssetId
          : 't' + clubs[clubIndex]?.details.customKit.crestAssetId;
        const crestPath = baseAsset ? 'custom-crests' : 'crests';
        return `https://media.contentapi.ea.com/content/dam/eacom/nhl/pro-clubs/${crestPath}/${crestId}.png`;
      default:
        return agg && agg[clubIndex] ? `${agg[clubIndex][stat] || '0'}` : `0`;
    }
  }
}
