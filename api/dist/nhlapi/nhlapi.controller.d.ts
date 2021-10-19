import { Observable } from 'rxjs';
import { MatchesService } from 'src/teams/matches.service';
import { MembersService } from 'src/teams/members.service';
import { StatsService } from 'src/teams/stats.service';
import { TeamsService } from 'src/teams/teams.service';
import { SearchApiDTO } from './dtos/search.dto';
import { UpdateResults } from './interfaces/update-results.interface';
import { NhlapiService } from './nhlapi.service';
export declare class NhlapiController {
    private nhlApi;
    private teamsService;
    private membersService;
    private statsService;
    private matchService;
    constructor(nhlApi: NhlapiService, teamsService: TeamsService, membersService: MembersService, statsService: StatsService, matchService: MatchesService);
    update(): Promise<UpdateResults>;
    search(searchApiDTO: SearchApiDTO): Observable<any>;
    private updateMembers;
    private updateSeasonalStats;
    private updateMatches;
}
