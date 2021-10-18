import { HttpModule, Module } from '@nestjs/common';
import { TeamsModule } from 'src/teams/teams.module';
import { NhlapiController } from './nhlapi.controller';
import { NhlapiService } from './nhlapi.service';

@Module({
  controllers: [NhlapiController],
  imports: [HttpModule, TeamsModule],
  providers: [NhlapiService],
  exports: [NhlapiService],
})
export class NhlapiModule {}
