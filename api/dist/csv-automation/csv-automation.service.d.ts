import { MatchesService } from 'src/teams/matches.service';
import { ClubMatch } from 'src/teams/schemas/club-match.schema';
export declare class CsvAutomationService {
    private readonly matchesService;
    constructor(matchesService: MatchesService);
    matchesToCsv(matches: ClubMatch[]): Promise<any>;
    private getPlayerStrings;
}
