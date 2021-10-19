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
exports.MatchClubDetailsApiDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const match_club_kit_dto_1 = require("./match-club-kit.dto");
class MatchClubDetailsApiDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchClubDetailsApiDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], MatchClubDetailsApiDto.prototype, "clubId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], MatchClubDetailsApiDto.prototype, "regionId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], MatchClubDetailsApiDto.prototype, "teamId", void 0);
__decorate([
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => match_club_kit_dto_1.MatchClubCustomKitApiDto),
    __metadata("design:type", match_club_kit_dto_1.MatchClubCustomKitApiDto)
], MatchClubDetailsApiDto.prototype, "customKit", void 0);
exports.MatchClubDetailsApiDto = MatchClubDetailsApiDto;
//# sourceMappingURL=match-club-details.dto.js.map