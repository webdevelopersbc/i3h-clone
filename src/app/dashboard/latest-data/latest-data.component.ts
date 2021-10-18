import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { uniqBy } from 'lodash';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Match } from '../../shared/models/match';

@Component({
  selector: 'app-latest-data',
  templateUrl: './latest-data.component.html',
  styleUrls: ['./latest-data.component.scss'],
})
export class LatestDataComponent implements OnInit {
  matches$: Observable<Match[]>;
  matchStats = [
    {txt: 'Goals', stat: 'goals'},
    {txt: 'Assists', stat: 'skassists'},
    {txt: 'Penalty Minutes', stat: 'skpim'},
    {txt: 'Skater Shots', stat: 'skshots'},
    {txt: 'Hits', stat: 'skhits'},
    {txt: 'Face Off Wins', stat: 'skfow'},
    {txt: 'Giveaways', stat: 'skgiveaways'},
    {txt: 'Takeaways', stat: 'sktakeaways'},
    {txt: 'Saves', stat: 'glsaves'},
    {txt: 'Goalie Shots', stat: 'glshots'},
    {txt: 'Goals Against', stat: 'glga'},
    {txt: 'Save Percentage', stat: 'glsavepct'},
  ];
  displayedColumns = ['name', 'position', 'goals', 'assists', 'plusminus', 'shots', 'faceoffwins', 'takeaways'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.updateData();
  }

  updateData(): void {
    this.matches$ = this.http.get<Match[]>('/api/teams/matches').pipe(
      map(matches => {
        return matches.sort((a, b) => {
          const aDate = moment.unix(a.timestamp);
          const bDate = moment.unix(b.timestamp);

          if (aDate.isAfter(bDate)) {
            return -1;
          }
          if (aDate.isBefore(bDate)) {
            return 1;
          }
          return 0;
        });
      }),
      map(sortedMatches => {
        const uniqueByClub = uniqBy(sortedMatches, 'clubId');
        const uniqueByMatch = uniqBy(uniqueByClub, 'matchId');
        return uniqueByMatch;
      })
    );
  }
}
