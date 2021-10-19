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
exports.StatsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const seasonal_stats_api_dto_1 = require("../nhlapi/dtos/seasonal-stats-api.dto");
const club_stats_schema_1 = require("./schemas/club-stats.schema");
let StatsService = class StatsService {
    constructor(clubStatsModel) {
        this.clubStatsModel = clubStatsModel;
    }
    async addStats(dto, clubId) {
        const dbStats = await this.clubStatsModel.findOne({ clubId });
        if (dbStats) {
            await this.clubStatsModel.replaceOne({ clubId }, Object.assign(Object.assign({}, dto), { clubId }));
            return;
        }
        const addedStats = new this.clubStatsModel(Object.assign(Object.assign({}, dto), { clubId }));
        await addedStats.save();
    }
};
StatsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(club_stats_schema_1.ClubStats.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StatsService);
exports.StatsService = StatsService;
//# sourceMappingURL=stats.service.js.map