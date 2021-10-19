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
exports.MatchClubInfoApiDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const match_club_details_dto_1 = require("./match-club-details.dto");
class MatchClubInfoApiDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchClubInfoApiDto.prototype, "cNhlOnlineGameType", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchClubInfoApiDto.prototype, "losses", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchClubInfoApiDto.prototype, "memberString", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchClubInfoApiDto.prototype, "ppg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchClubInfoApiDto.prototype, "ppo", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchClubInfoApiDto.prototype, "result", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchClubInfoApiDto.prototype, "score", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchClubInfoApiDto.prototype, "teamSide", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchClubInfoApiDto.prototype, "toa", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchClubInfoApiDto.prototype, "winnerByDnf", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchClubInfoApiDto.prototype, "winnerByGoalieDnf", void 0);
__decorate([
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => match_club_details_dto_1.MatchClubDetailsApiDto),
    __metadata("design:type", match_club_details_dto_1.MatchClubDetailsApiDto)
], MatchClubInfoApiDto.prototype, "details", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchClubInfoApiDto.prototype, "goals", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchClubInfoApiDto.prototype, "goalsAgainst", void 0);
exports.MatchClubInfoApiDto = MatchClubInfoApiDto;
//# sourceMappingURL= match-club-info.dto.js.map