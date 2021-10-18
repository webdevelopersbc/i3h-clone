import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapCrestFromSearchPipe } from './pipes/map-crest-from-search.pipe';
import { MapCrestPipe } from './pipes/map-crest.pipe';
import { MatchFilterPipe } from './pipes/match-filter.pipe';
import { MatchPlayersPipe } from './pipes/match-players.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [MapCrestFromSearchPipe, MapCrestPipe, MatchFilterPipe, MatchPlayersPipe, TimeAgoPipe],
  imports: [CommonModule],
  exports: [MapCrestFromSearchPipe, MapCrestPipe, MatchFilterPipe, MatchPlayersPipe, TimeAgoPipe],
})
export class SharedModule {}
