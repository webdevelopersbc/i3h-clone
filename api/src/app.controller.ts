import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { CsvAutomationService } from './csv-automation/csv-automation.service';
import { ClubMatch } from './teams/schemas/club-match.schema';
import { MatchesService } from './teams/matches.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly matchesService: MatchesService,
    private readonly csvService: CsvAutomationService,
  ) {}

  @Get()
  @Header('Content-Disposition', 'attachment; filename=latest-matches.csv')
  @Header('Content-type', 'text/csv')
  async getHello(): Promise<any> {
    const matches = await this.matchesService.findAll();
    const matchesCsv = await this.csvService.matchesToCsv(matches);
    return matchesCsv;
  }
}
