import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NhlapiModule } from 'src/nhlapi/nhlapi.module';
import { TeamsModule } from 'src/teams/teams.module';
import { AppSettings, AppSettingsSchema } from './schemas/app-settings.schema';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { UpdateTaskService } from './update-task.service';

@Module({
  controllers: [SettingsController],
  providers: [SettingsService, UpdateTaskService],
  imports: [
    MongooseModule.forFeature([
      { name: AppSettings.name, schema: AppSettingsSchema },
    ]),
    NhlapiModule,
    TeamsModule,
  ],
})
export class SettingsModule {}
