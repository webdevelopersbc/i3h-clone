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
    MongooseModule.forRoot('mongodb+srv://i3hldbadmin:Q3k7QXsollwGq8Dz@cluster0.obamq.mongodb.net/i3hl?retryWrites=true&w=majority'),
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
