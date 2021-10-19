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
exports.MatchPlayerApiDto = void 0;
const class_validator_1 = require("class-validator");
class MatchPlayerApiDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "class", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "glbrksavepct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "glbrksaves", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "glbrkshots", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "gldsaves", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "glga", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "glgaa", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "glOverallMmr", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "glpensavepct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "glpensaves", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "glpenshots", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "glpokechecks", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "glsavepct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "glsaves", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "glshots", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "player_dnf", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "playerLevel", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "playername", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "pNhlOnlineGameType", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsIn(['center', 'defenseMen', 'goalie', 'leftWing']),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "position", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "posSorted", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "ratingDefense", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "ratingOffense", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "ratingTeamplay", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skassists", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skbs", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skfol", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skfopct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skfow", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skgiveaways", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skgoals", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skgwg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skhits", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skOverallMmr", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skpim", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skplusmin", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skppg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skshg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skshotpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "skshots", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "sktakeaways", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "teamSide", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "toi", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchPlayerApiDto.prototype, "toiseconds", void 0);
exports.MatchPlayerApiDto = MatchPlayerApiDto;
//# sourceMappingURL=match-player.dto.js.map