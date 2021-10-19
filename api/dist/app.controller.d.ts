import { AppService } from './app.service';
import { CsvAutomationService } from './csv-automation/csv-automation.service';
import { MatchesService } from './teams/matches.service';
export declare class AppController {
    private readonly appService;
    private readonly matchesService;
    private readonly csvService;
    constructor(appService: AppService, matchesService: MatchesService, csvService: CsvAutomationService);
    getHello(): Promise<any>;
}
