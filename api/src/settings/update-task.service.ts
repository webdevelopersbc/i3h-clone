import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { CronExpression, SchedulerRegistry, Timeout } from '@nestjs/schedule';
import { validate } from 'class-validator';
import { CronJob } from 'cron';
import * as moment from 'moment';
import 'moment-timezone';
import { ClubMembersApiDto } from 'src/nhlapi/dtos/members-api.dto';
import { SeasonalStatsApiDto } from 'src/nhlapi/dtos/seasonal-stats-api.dto';
import { NhlapiService } from 'src/nhlapi/nhlapi.service';
import { MatchesService } from 'src/teams/matches.service';
import { MembersService } from 'src/teams/members.service';
import { Club } from 'src/teams/schemas/club.schema';
import { StatsService } from 'src/teams/stats.service';
import { TeamsService } from 'src/teams/teams.service';
import { SettingsService } from './settings.service';

@Injectable()
export class UpdateTaskService {
  private readonly logger = new Logger(UpdateTaskService.name);

  constructor(
    @Inject(forwardRef(() => SettingsService))
    private settingsService: SettingsService,
    private schedulerRegistry: SchedulerRegistry,
    private nhlApi: NhlapiService,
    private teamsService: TeamsService,
    private membersService: MembersService,
    private statsService: StatsService,
    private matchService: MatchesService,
  ) {}

  @Timeout(60000)
  async taskInitializer(): Promise<void> {
    this.logger.debug('Task Initializer Started');

    await this.createUpdateTaskFromSettings();

    this.logger.debug('Task Initializer Completed');
  }

  async createUpdateTaskFromSettings(): Promise<void> {
    this.logger.debug('Task Setup Started');
    const settings = await this.settingsService.get();
    const timeZones = [
      'America/New_York',
      'America/Chicago',
      'America/Phoenix',
      'America/Los_Angeles',
    ];
    const timeOffset =
      Math.abs(moment().utcOffset() / 60) -
      Math.abs(
        moment
          .utc()
          .tz(timeZones[this.getTimezoneIndex(settings.timeZone)])
          .utcOffset() / 60,
      );
    const offsetTimeIndex =
      this.getTimeAsIndex(settings.timeOfDay) + timeOffset;
    const cronExpression = this.getTimeIndexAsCronSchedule(offsetTimeIndex);

    try {
      this.schedulerRegistry.getCronJob('updateTask');
      this.schedulerRegistry.deleteCronJob('updateTask');
    } catch (error) {}

    const job = new CronJob(cronExpression, async () => {
      const clubs = await this.teamsService.findAll();

      if (!clubs || clubs.length < 1) {
        return;
      }

      await this.updateMembers(clubs);
      await this.updateSeasonalStats(clubs);
      await this.updateMatches(clubs);
    });

    this.schedulerRegistry.addCronJob('updateTask', job);
    job.start();

    this.logger.debug('Task Setup Completed');
  }

  private getTimezoneIndex(timeZone: string): number {
    switch (timeZone) {
      case 'Eastern':
        return 0;
      case 'Central':
        return 1;
      case 'Mountain':
        return 2;
      case 'Pacific':
        return 3;
    }
  }

  private getTimeAsIndex(time: string): number {
    switch (time) {
      case '12:00AM':
        return 0;
      case '1:00AM':
        return 1;
      case '2:00AM':
        return 2;
      case '3:00AM':
        return 3;
      case '4:00AM':
        return 4;
      case '5:00AM':
        return 5;
      case '6:00AM':
        return 6;
      case '7:00AM':
        return 7;
      case '8:00AM':
        return 8;
      case '9:00AM':
        return 9;
      case '10:00AM':
        return 10;
      case '11:00AM':
        return 11;
      case '12:00PM':
        return 12;
      case '1:00PM':
        return 13;
      case '2:00PM':
        return 14;
      case '3:00PM':
        return 15;
      case '4:00PM':
        return 16;
      case '5:00PM':
        return 17;
      case '6:00PM':
        return 18;
      case '7:00PM':
        return 19;
      case '8:00PM':
        return 20;
      case '9:00PM':
        return 21;
      case '10:00PM':
        return 22;
      case '11:00PM':
        return 23;
    }
  }

  private getTimeIndexAsCronSchedule(index: number): CronExpression {
    switch (index) {
      case 0:
        return CronExpression.EVERY_DAY_AT_MIDNIGHT;
      case 1:
        return CronExpression.EVERY_DAY_AT_1AM;
      case 2:
        return CronExpression.EVERY_DAY_AT_2AM;
      case 3:
        return CronExpression.EVERY_DAY_AT_3AM;
      case 4:
        return CronExpression.EVERY_DAY_AT_4AM;
      case 5:
        return CronExpression.EVERY_DAY_AT_5AM;
      case 6:
        return CronExpression.EVERY_DAY_AT_6AM;
      case 7:
        return CronExpression.EVERY_DAY_AT_7AM;
      case 8:
        return CronExpression.EVERY_DAY_AT_8AM;
      case 9:
        return CronExpression.EVERY_DAY_AT_9AM;
      case 10:
        return CronExpression.EVERY_DAY_AT_10AM;
      case 11:
        return CronExpression.EVERY_DAY_AT_11AM;
      case 12:
        return CronExpression.EVERY_DAY_AT_NOON;
      case 13:
        return CronExpression.EVERY_DAY_AT_1PM;
      case 14:
        return CronExpression.EVERY_DAY_AT_2PM;
      case 15:
        return CronExpression.EVERY_DAY_AT_3PM;
      case 16:
        return CronExpression.EVERY_DAY_AT_4PM;
      case 17:
        return CronExpression.EVERY_DAY_AT_5PM;
      case 18:
        return CronExpression.EVERY_DAY_AT_6PM;
      case 19:
        return CronExpression.EVERY_DAY_AT_7PM;
      case 20:
        return CronExpression.EVERY_DAY_AT_8PM;
      case 21:
        return CronExpression.EVERY_DAY_AT_9PM;
      case 22:
        return CronExpression.EVERY_DAY_AT_10PM;
      case 23:
        return CronExpression.EVERY_DAY_AT_11PM;
    }
  }

  private async updateMembers(
    clubs: Club[],
  ): Promise<{
    errors: Club[];
    members: Array<ClubMembersApiDto & { clubId: number }>;
  }> {
    const errors: Club[] = [];
    const members: Array<ClubMembersApiDto & { clubId: number }> = [];

    for (const club of clubs) {
      const memberSet = await this.nhlApi
        .updateMembers(club.platform, club.clubId)
        .toPromise();

      if (!memberSet) {
        errors.push(club);
        continue;
      }

      const validationErrors = await validate(memberSet);

      if (validationErrors.length > 0) {
        errors.push(club);
        continue;
      }

      members.push({ clubId: club.clubId, ...memberSet });
      await this.membersService.addMembers(memberSet, club.clubId);
    }

    return { errors, members };
  }

  private async updateSeasonalStats(
    clubs: Club[],
  ): Promise<{
    errors: Club[];
    stats: Array<Omit<SeasonalStatsApiDto, 'clubId'> & { clubId: number }>;
  }> {
    const errors: Club[] = [];
    const stats: Array<Omit<SeasonalStatsApiDto, 'clubId'> & {
      clubId: number;
    }> = [];

    for (const club of clubs) {
      const statSet = await this.nhlApi
        .updateStats(club.platform, club.clubId)
        .toPromise();

      if (!statSet) {
        errors.push(club);
        continue;
      }

      const validationErrors = await validate(statSet);
      if (validationErrors.length > 0) {
        errors.push(club);
        continue;
      }

      stats.push({ ...statSet, clubId: club.clubId });
      await this.statsService.addStats(statSet, club.clubId);
    }

    return { errors, stats };
  }

  private async updateMatches(
    clubs: Club[],
  ): Promise<{
    errors: { club: Club; errors: any }[];
  }> {
    const errors: { club: Club; errors: any }[] = [];

    for (const club of clubs) {
      const matches = await this.nhlApi
        .updateMatches(club.platform, club.clubId)
        .toPromise();

      if (!matches || !matches.matches || matches.matches.length < 1) {
        errors.push({ club, errors: 'No matches' });
        continue;
      }

      const validationErrors = await validate(matches);
      if (validationErrors.length > 0) {
        errors.push({ club, errors: validationErrors });
        continue;
      }

      await this.matchService.addMatches(matches, club.clubId);
    }

    return { errors };
  }
}
