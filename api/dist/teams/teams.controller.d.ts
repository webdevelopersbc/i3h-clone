import { AddTeamsDto } from './dtos/add-teams.dto';
import { MatchesService } from './matches.service';
import { ClubMatch } from './schemas/club-match.schema';
import { Club } from './schemas/club.schema';
import { TeamsService } from './teams.service';
export declare class TeamsController {
    private teamsService;
    private matchesService;
    constructor(teamsService: TeamsService, matchesService: MatchesService);
    getAll(): Promise<Club[]>;
    addTeams(addTeamsDto: AddTeamsDto): Promise<Club[]>;
    deleteTeam(id: number): Promise<Club[]>;
    getAllMatches(): Promise<ClubMatch[]>;
}
