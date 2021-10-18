import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MatchListApiDto } from './dtos/match-api.dto';
import { ClubMembersApiDto } from './dtos/members-api.dto';
import { ApiPlatform } from './dtos/search.dto';
import { SeasonalStatsApiDto } from './dtos/seasonal-stats-api.dto';

@Injectable()
export class NhlapiService {
  private readonly headers = {
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      DNT: '1',
      Host: 'proclubs.ea.com',
      Origin: 'https://www.ea.com',
      Referer: 'https://www.ea.com/games/nhl/nhl-20/pro-clubs/rankings',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
    },
  };

  constructor(private http: HttpService) {}

  search(
    platform: ApiPlatform,
    search: string,
  ): Observable<AxiosResponse<any>> {
    return this.http
      .get<any>(
        `https://proclubs.ea.com/api/nhl/clubs/search?platform=${platform}&clubName=${encodeURIComponent(
          search,
        )}`,
        this.headers,
      )
      .pipe(
        map(response => {
          return response.data;
        }),
        catchError(error => {
          console.log(error);
          return EMPTY;
        }),
      );
  }

  updateMembers(
    platform: string,
    clubId: number,
  ): Observable<ClubMembersApiDto> {
    return this.http
      .get<any>(
        `https://proclubs.ea.com/api/nhl/members/stats?platform=${platform}&clubId=${clubId}`,
        this.headers,
      )
      .pipe(
        map(response => {
          return plainToClass(ClubMembersApiDto, response.data);
        }),
        catchError(error => {
          console.log(error);
          return EMPTY;
        }),
      );
  }

  updateStats(
    platform: string,
    clubId: number,
  ): Observable<SeasonalStatsApiDto> {
    return this.http
      .get<any>(
        `https://proclubs.ea.com/api/nhl/clubs/seasonalStats?platform=${platform}&clubIds=${clubId}`,
        this.headers,
      )
      .pipe(
        map(response => {
          return plainToClass(SeasonalStatsApiDto, response.data[0]);
        }),
        catchError(error => {
          console.log(error);
          return EMPTY;
        }),
      );
  }

  updateMatches(platform: string, clubId: number): Observable<MatchListApiDto> {
    return this.http
      .get<any>(
        `https://proclubs.ea.com/api/nhl/clubs/matches?matchType=club_private&platform=${platform}&clubIds=${clubId}`,
        this.headers,
      )
      .pipe(
        map(response => {
          return plainToClass(MatchListApiDto, { matches: response.data }, { enableImplicitConversion: true });
        }),
        catchError(error => {
          console.log(error);
          return EMPTY;
        }),
      );
  }
}
