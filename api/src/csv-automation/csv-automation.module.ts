import { Module } from '@nestjs/common';
import { CsvAutomationService } from './csv-automation.service';
import { TeamsModule } from 'src/teams/teams.module';

@Module({
  providers: [CsvAutomationService],
  imports: [TeamsModule],
  exports: [CsvAutomationService]
})
export class CsvAutomationModule {}
