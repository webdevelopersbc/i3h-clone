"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UpdateTaskService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const class_validator_1 = require("class-validator");
const cron_1 = require("cron");
const moment = require("moment");
require("moment-timezone");
const members_api_dto_1 = require("../nhlapi/dtos/members-api.dto");
const seasonal_stats_api_dto_1 = require("../nhlapi/dtos/seasonal-stats-api.dto");
const nhlapi_service_1 = require("../nhlapi/nhlapi.service");
const matches_service_1 = require("../teams/matches.service");
const members_service_1 = require("../teams/members.service");
const club_schema_1 = require("../teams/schemas/club.schema");
const stats_service_1 = require("../teams/stats.service");
const teams_service_1 = require("../teams/teams.service");
const settings_service_1 = require("./settings.service");
let UpdateTaskService = UpdateTaskService_1 = class UpdateTaskService {
    constructor(settingsService, schedulerRegistry, nhlApi, teamsService, membersService, statsService, matchService) {
        this.settingsService = settingsService;
        this.schedulerRegistry = schedulerRegistry;
        this.nhlApi = nhlApi;
        this.teamsService = teamsService;
        this.membersService = membersService;
        this.statsService = statsService;
        this.matchService = matchService;
        this.logger = new common_1.Logger(UpdateTaskService_1.name);
    }
    async taskInitializer() {
        this.logger.debug('Task Initializer Started');
        await this.createUpdateTaskFromSettings();
        this.logger.debug('Task Initializer Completed');
    }
    async createUpdateTaskFromSettings() {
        this.logger.debug('Task Setup Started');
        const settings = await this.settingsService.get();
        const timeZones = [
            'America/New_York',
            'America/Chicago',
            'America/Phoenix',
            'America/Los_Angeles',
        ];
        const timeOffset = Math.abs(moment().utcOffset() / 60) -
            Math.abs(moment
                .utc()
                .tz(timeZones[this.getTimezoneIndex(settings.timeZone)])
                .utcOffset() / 60);
        const offsetTimeIndex = this.getTimeAsIndex(settings.timeOfDay) + timeOffset;
        const cronExpression = this.getTimeIndexAsCronSchedule(offsetTimeIndex);
        try {
            this.schedulerRegistry.getCronJob('updateTask');
            this.schedulerRegistry.deleteCronJob('updateTask');
        }
        catch (error) { }
        const job = new cron_1.CronJob(cronExpression, async () => {
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
    getTimezoneIndex(timeZone) {
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
    getTimeAsIndex(time) {
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
    getTimeIndexAsCronSchedule(index) {
        switch (index) {
            case 0:
                return schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT;
            case 1:
                return schedule_1.CronExpression.EVERY_DAY_AT_1AM;
            case 2:
                return schedule_1.CronExpression.EVERY_DAY_AT_2AM;
            case 3:
                return schedule_1.CronExpression.EVERY_DAY_AT_3AM;
            case 4:
                return schedule_1.CronExpression.EVERY_DAY_AT_4AM;
            case 5:
                return schedule_1.CronExpression.EVERY_DAY_AT_5AM;
            case 6:
                return schedule_1.CronExpression.EVERY_DAY_AT_6AM;
            case 7:
                return schedule_1.CronExpression.EVERY_DAY_AT_7AM;
            case 8:
                return schedule_1.CronExpression.EVERY_DAY_AT_8AM;
            case 9:
                return schedule_1.CronExpression.EVERY_DAY_AT_9AM;
            case 10:
                return schedule_1.CronExpression.EVERY_DAY_AT_10AM;
            case 11:
                return schedule_1.CronExpression.EVERY_DAY_AT_11AM;
            case 12:
                return schedule_1.CronExpression.EVERY_DAY_AT_NOON;
            case 13:
                return schedule_1.CronExpression.EVERY_DAY_AT_1PM;
            case 14:
                return schedule_1.CronExpression.EVERY_DAY_AT_2PM;
            case 15:
                return schedule_1.CronExpression.EVERY_DAY_AT_3PM;
            case 16:
                return schedule_1.CronExpression.EVERY_DAY_AT_4PM;
            case 17:
                return schedule_1.CronExpression.EVERY_DAY_AT_5PM;
            case 18:
                return schedule_1.CronExpression.EVERY_DAY_AT_6PM;
            case 19:
                return schedule_1.CronExpression.EVERY_DAY_AT_7PM;
            case 20:
                return schedule_1.CronExpression.EVERY_DAY_AT_8PM;
            case 21:
                return schedule_1.CronExpression.EVERY_DAY_AT_9PM;
            case 22:
                return schedule_1.CronExpression.EVERY_DAY_AT_10PM;
            case 23:
                return schedule_1.CronExpression.EVERY_DAY_AT_11PM;
        }
    }
    async updateMembers(clubs) {
        const errors = [];
        const members = [];
        for (const club of clubs) {
            const memberSet = await this.nhlApi
                .updateMembers(club.platform, club.clubId)
                .toPromise();
            if (!memberSet) {
                errors.push(club);
                continue;
            }
            const validationErrors = await class_validator_1.validate(memberSet);
            if (validationErrors.length > 0) {
                errors.push(club);
                continue;
            }
            members.push(Object.assign({ clubId: club.clubId }, memberSet));
            await this.membersService.addMembers(memberSet, club.clubId);
        }
        return { errors, members };
    }
    async updateSeasonalStats(clubs) {
        const errors = [];
        const stats = [];
        for (const club of clubs) {
            const statSet = await this.nhlApi
                .updateStats(club.platform, club.clubId)
                .toPromise();
            if (!statSet) {
                errors.push(club);
                continue;
            }
            const validationErrors = await class_validator_1.validate(statSet);
            if (validationErrors.length > 0) {
                errors.push(club);
                continue;
            }
            stats.push(Object.assign(Object.assign({}, statSet), { clubId: club.clubId }));
            await this.statsService.addStats(statSet, club.clubId);
        }
        return { errors, stats };
    }
    async updateMatches(clubs) {
        const errors = [];
        for (const club of clubs) {
            const matches = await this.nhlApi
                .updateMatches(club.platform, club.clubId)
                .toPromise();
            if (!matches || !matches.matches || matches.matches.length < 1) {
                errors.push({ club, errors: 'No matches' });
                continue;
            }
            const validationErrors = await class_validator_1.validate(matches);
            if (validationErrors.length > 0) {
                errors.push({ club, errors: validationErrors });
                continue;
            }
            await this.matchService.addMatches(matches, club.clubId);
        }
        return { errors };
    }
};
__decorate([
    schedule_1.Timeout(60000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UpdateTaskService.prototype, "taskInitializer", null);
UpdateTaskService = UpdateTaskService_1 = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(common_1.forwardRef(() => settings_service_1.SettingsService))),
    __metadata("design:paramtypes", [settings_service_1.SettingsService,
        schedule_1.SchedulerRegistry,
        nhlapi_service_1.NhlapiService,
        teams_service_1.TeamsService,
        members_service_1.MembersService,
        stats_service_1.StatsService,
        matches_service_1.MatchesService])
], UpdateTaskService);
exports.UpdateTaskService = UpdateTaskService;
//# sourceMappingURL=update-task.service.js.map