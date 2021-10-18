import { Pipe, PipeTransform } from '@angular/core';
import { ClubSearchResult } from '../models/club-search-result';

@Pipe({
  name: 'mapCrestFromSearch',
})
export class MapCrestFromSearchPipe implements PipeTransform {
  transform(club: ClubSearchResult): string {
    const baseAsset = club.clubInfo.customKit.useBaseAsset === '1';
    const crestId = baseAsset ? club.clubInfo.customKit.crestAssetId : 't' + club.clubInfo.customKit.crestAssetId;
    const crestPath = baseAsset ? 'custom-crests' : 'crests';
    return `https://media.contentapi.ea.com/content/dam/eacom/nhl/pro-clubs/${crestPath}/${crestId}.png`;
  }
}
