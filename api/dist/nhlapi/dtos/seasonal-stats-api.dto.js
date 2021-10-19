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
exports.SeasonalStatsApiDto = void 0;
const class_validator_1 = require("class-validator");
class SeasonalStatsApiDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "rank", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "clubname", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SeasonalStatsApiDto.prototype, "seasons", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "divGroupsWon", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "leaguesWon", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "divGroupsWon1", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "divGroupsWon2", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "divGroupsWon3", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "divGroupsWon4", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "cupsWon1", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "cupsWon2", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "cupsWon3", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "cupsWon4", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "cupsWon5", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "cupsElim1", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "cupsElim2", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "cupsElim3", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "cupsElim4", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "cupsElim5", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "promotions", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "holds", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "relegations", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "rankingPoints", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "curCompetition", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "prevDivision", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "prevGameDivision", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SeasonalStatsApiDto.prototype, "bestDivision", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "bestPoints", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "curSeasonMov", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentResult0", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentResult1", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentResult2", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentResult3", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentResult4", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentResult5", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentResult6", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentResult7", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentResult8", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentResult9", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentOpponent0", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentOpponent1", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentOpponent2", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentOpponent3", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentOpponent4", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentOpponent5", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentOpponent6", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentOpponent7", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentOpponent8", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentOpponent9", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentScore0", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentScore1", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentScore2", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentScore3", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentScore4", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentScore5", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentScore6", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentScore7", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentScore8", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "recentScore9", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "wins", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "losses", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "ties", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "otl", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "prevSeasonWins", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "prevSeasonLosses", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "prevSeasonTies", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "prevSeasonOtl", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "goals", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "goalsAgainst", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "starLevel", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SeasonalStatsApiDto.prototype, "totalCupsWon", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "cupsEntered", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "cupWinPercent", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "titlesWon", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "prevGameWonTitle", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "record", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], SeasonalStatsApiDto.prototype, "clubId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SeasonalStatsApiDto.prototype, "divsWon1", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SeasonalStatsApiDto.prototype, "divsWon2", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SeasonalStatsApiDto.prototype, "divsWon3", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SeasonalStatsApiDto.prototype, "divsWon4", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SeasonalStatsApiDto.prototype, "currentDivision", void 0);
__decorate([
    class_validator_1.IsString({ each: true }),
    __metadata("design:type", Array)
], SeasonalStatsApiDto.prototype, "recentResults", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], SeasonalStatsApiDto.prototype, "totalGames", void 0);
exports.SeasonalStatsApiDto = SeasonalStatsApiDto;
//# sourceMappingURL=seasonal-stats-api.dto.js.map