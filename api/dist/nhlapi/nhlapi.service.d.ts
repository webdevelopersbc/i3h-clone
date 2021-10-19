import { HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { MatchListApiDto } from './dtos/match-api.dto';
import { ClubMembersApiDto } from './dtos/members-api.dto';
import { ApiPlatform } from './dtos/search.dto';
import { SeasonalStatsApiDto } from './dtos/seasonal-stats-api.dto';
export declare class NhlapiService {
    private http;
    private readonly headers;
    constructor(http: HttpService);
    search(platform: ApiPlatform, search: string): Observable<AxiosResponse<any>>;
    updateMembers(platform: string, clubId: number): Observable<ClubMembersApiDto>;
    updateStats(platform: string, clubId: number): Observable<SeasonalStatsApiDto>;
    updateMatches(platform: string, clubId: number): Observable<MatchListApiDto>;
}
