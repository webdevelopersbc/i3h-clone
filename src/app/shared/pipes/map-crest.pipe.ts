import { Pipe, PipeTransform } from '@angular/core';
import { Club } from '../models/club';

@Pipe({
  name: 'mapCrest',
})
export class MapCrestPipe implements PipeTransform {
  transform(club: Club): string {
    const baseAsset = club.customKit.useBaseAsset === '1';
    const crestId = baseAsset ? club.customKit.crestAssetId : 't' + club.customKit.crestAssetId;
    const crestPath = baseAsset ? 'custom-crests' : 'crests';
    return `https://media.contentapi.ea.com/content/dam/eacom/nhl/pro-clubs/${crestPath}/${crestId}.png`;
  }
}
