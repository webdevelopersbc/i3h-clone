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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhlapiController = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const rxjs_1 = require("rxjs");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const matches_service_1 = require("../teams/matches.service");
const members_service_1 = require("../teams/members.service");
const club_schema_1 = require("../teams/schemas/club.schema");
const stats_service_1 = require("../teams/stats.service");
const teams_service_1 = require("../teams/teams.service");
const search_dto_1 = require("./dtos/search.dto");
const nhlapi_service_1 = require("./nhlapi.service");
let NhlapiController = class NhlapiController {
    constructor(nhlApi, teamsService, membersService, statsService, matchService) {
        this.nhlApi = nhlApi;
        this.teamsService = teamsService;
        this.membersService = membersService;
        this.statsService = statsService;
        this.matchService = matchService;
    }
    async update() {
        const clubs = await this.teamsService.findAll();
        let results = {
            memberErrors: [],
            members: [],
            seasonStatsErrors: [],
            seasonStats: [],
            matchErrors: [],
        };
        if (!clubs || clubs.length < 1) {
            return results;
        }
        const membersResults = await this.updateMembers(clubs);
        const seasonalStatsResults = await this.updateSeasonalStats(clubs);
        const matchResults = await this.updateMatches(clubs);
        results = Object.assign(Object.assign({}, results), { memberErrors: membersResults.errors, members: membersResults.members, seasonStatsErrors: seasonalStatsResults.errors, seasonStats: seasonalStatsResults.stats, matchErrors: matchResults.errors.slice(1, 2) });
        return results.matchErrors;
    }
    search(searchApiDTO) {
        return this.nhlApi.search(searchApiDTO.platform, searchApiDTO.search);
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
    common_1.Get('update'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NhlapiController.prototype, "update", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_dto_1.SearchApiDTO]),
    __metadata("design:returntype", rxjs_1.Observable)
], NhlapiController.prototype, "search", null);
NhlapiController = __decorate([
    common_1.Controller('nhlapi'),
    __metadata("design:paramtypes", [nhlapi_service_1.NhlapiService,
        teams_service_1.TeamsService,
        members_service_1.MembersService,
        stats_service_1.StatsService,
        matches_service_1.MatchesService])
], NhlapiController);
exports.NhlapiController = NhlapiController;
//# sourceMappingURL=nhlapi.controller.js.map