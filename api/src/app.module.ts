import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { NhlapiModule } from './nhlapi/nhlapi.module';
import { SettingsModule } from './settings/settings.module';
import { TeamsModule } from './teams/teams.module';
import { UsersModule } from './users/users.module';
import { CsvAutomationModule } from './csv-automation/csv-automation.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://fardos:fardos@i3.k1pro.mongodb.net/i3?retryWrites=true&w=majority'),
    ScheduleModule.forRoot(),
    AuthModule,
    UsersModule,
    NhlapiModule,
    TeamsModule,
    SettingsModule,
    CsvAutomationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
