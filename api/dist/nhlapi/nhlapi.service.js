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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhlapiService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const match_api_dto_1 = require("./dtos/match-api.dto");
const members_api_dto_1 = require("./dtos/members-api.dto");
const seasonal_stats_api_dto_1 = require("./dtos/seasonal-stats-api.dto");
let NhlapiService = class NhlapiService {
    constructor(http) {
        this.http = http;
        this.headers = {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                DNT: '1',
                Host: 'proclubs.ea.com',
                Origin: 'https://www.ea.com',
                Referer: 'https://www.ea.com/games/nhl/nhl-20/pro-clubs/rankings',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-site',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
            },
        };
    }
    search(platform, search) {
        return this.http
            .get(`https://proclubs.ea.com/api/nhl/clubs/search?platform=${platform}&clubName=${encodeURIComponent(search)}`, this.headers)
            .pipe(operators_1.map(response => {
            return response.data;
        }), operators_1.catchError(error => {
            console.log(error);
            return rxjs_1.EMPTY;
        }));
    }
    updateMembers(platform, clubId) {
        return this.http
            .get(`https://proclubs.ea.com/api/nhl/members/stats?platform=${platform}&clubId=${clubId}`, this.headers)
            .pipe(operators_1.map(response => {
            return class_transformer_1.plainToClass(members_api_dto_1.ClubMembersApiDto, response.data);
        }), operators_1.catchError(error => {
            console.log(error);
            return rxjs_1.EMPTY;
        }));
    }
    updateStats(platform, clubId) {
        return this.http
            .get(`https://proclubs.ea.com/api/nhl/clubs/seasonalStats?platform=${platform}&clubIds=${clubId}`, this.headers)
            .pipe(operators_1.map(response => {
            return class_transformer_1.plainToClass(seasonal_stats_api_dto_1.SeasonalStatsApiDto, response.data[0]);
        }), operators_1.catchError(error => {
            console.log(error);
            return rxjs_1.EMPTY;
        }));
    }
    updateMatches(platform, clubId) {
        return this.http
            .get(`https://proclubs.ea.com/api/nhl/clubs/matches?matchType=club_private&platform=${platform}&clubIds=${clubId}`, this.headers)
            .pipe(operators_1.map(response => {
            return class_transformer_1.plainToClass(match_api_dto_1.MatchListApiDto, { matches: response.data }, { enableImplicitConversion: true });
        }), operators_1.catchError(error => {
            console.log(error);
            return rxjs_1.EMPTY;
        }));
    }
};
NhlapiService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], NhlapiService);
exports.NhlapiService = NhlapiService;
//# sourceMappingURL=nhlapi.service.js.map