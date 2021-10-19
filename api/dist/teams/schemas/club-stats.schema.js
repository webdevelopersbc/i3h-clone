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
exports.ClubStatsSchema = exports.ClubStats = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ClubStats = class ClubStats extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop({ required: true, createIndex: true, dropDupes: true }),
    __metadata("design:type", Number)
], ClubStats.prototype, "clubId", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "rank", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "clubname", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], ClubStats.prototype, "seasons", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "divGroupsWon", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "leaguesWon", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "divGroupsWon1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "divGroupsWon2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "divGroupsWon3", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "divGroupsWon4", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "cupsWon1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "cupsWon2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "cupsWon3", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "cupsWon4", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "cupsWon5", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "cupsElim1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "cupsElim2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "cupsElim3", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "cupsElim4", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "cupsElim5", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "promotions", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "holds", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "relegations", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "rankingPoints", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "curCompetition", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "prevDivision", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "prevGameDivision", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], ClubStats.prototype, "bestDivision", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "bestPoints", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "curSeasonMov", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentResult0", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentResult1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentResult2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentResult3", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentResult4", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentResult5", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentResult6", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentResult7", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentResult8", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentResult9", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentOpponent0", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentOpponent1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentOpponent2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentOpponent3", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentOpponent4", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentOpponent5", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentOpponent6", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentOpponent7", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentOpponent8", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentOpponent9", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentScore0", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentScore1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentScore2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentScore3", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentScore4", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentScore5", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentScore6", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentScore7", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentScore8", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "recentScore9", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "wins", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "losses", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "ties", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "otl", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "prevSeasonWins", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "prevSeasonLosses", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "prevSeasonTies", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "prevSeasonOtl", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "goals", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "goalsAgainst", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "starLevel", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], ClubStats.prototype, "totalCupsWon", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "cupsEntered", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "cupWinPercent", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "titlesWon", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "prevGameWonTitle", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ClubStats.prototype, "record", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], ClubStats.prototype, "divsWon1", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], ClubStats.prototype, "divsWon2", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], ClubStats.prototype, "divsWon3", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], ClubStats.prototype, "divsWon4", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], ClubStats.prototype, "currentDivision", void 0);
__decorate([
    mongoose_1.Prop([String]),
    __metadata("design:type", Array)
], ClubStats.prototype, "recentResults", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], ClubStats.prototype, "totalGames", void 0);
ClubStats = __decorate([
    mongoose_1.Schema()
], ClubStats);
exports.ClubStats = ClubStats;
exports.ClubStatsSchema = mongoose_1.SchemaFactory.createForClass(ClubStats);
//# sourceMappingURL=club-stats.schema.js.map