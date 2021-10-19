import { SchedulerRegistry } from '@nestjs/schedule';
import 'moment-timezone';
import { NhlapiService } from 'src/nhlapi/nhlapi.service';
import { MatchesService } from 'src/teams/matches.service';
import { MembersService } from 'src/teams/members.service';
import { StatsService } from 'src/teams/stats.service';
import { TeamsService } from 'src/teams/teams.service';
import { SettingsService } from './settings.service';
export declare class UpdateTaskService {
    private settingsService;
    private schedulerRegistry;
    private nhlApi;
    private teamsService;
    private membersService;
    private statsService;
    private matchService;
    private readonly logger;
    constructor(settingsService: SettingsService, schedulerRegistry: SchedulerRegistry, nhlApi: NhlapiService, teamsService: TeamsService, membersService: MembersService, statsService: StatsService, matchService: MatchesService);
    taskInitializer(): Promise<void>;
    createUpdateTaskFromSettings(): Promise<void>;
    private getTimezoneIndex;
    private getTimeAsIndex;
    private getTimeIndexAsCronSchedule;
    private updateMembers;
    private updateSeasonalStats;
    private updateMatches;
}
