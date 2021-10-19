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
exports.MatchListApiDto = exports.MatchApiDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const match_time_ago_dto_1 = require("./match-time-ago.dto");
class MatchApiDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MatchApiDto.prototype, "matchId", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], MatchApiDto.prototype, "timestamp", void 0);
__decorate([
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => match_time_ago_dto_1.MatchTimeAgoApiDto),
    __metadata("design:type", match_time_ago_dto_1.MatchTimeAgoApiDto)
], MatchApiDto.prototype, "timeAgo", void 0);
__decorate([
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", Object)
], MatchApiDto.prototype, "clubs", void 0);
__decorate([
    class_validator_1.ValidateNested(),
    __metadata("design:type", Object)
], MatchApiDto.prototype, "players", void 0);
__decorate([
    class_validator_1.ValidateNested({ each: true }),
    __metadata("design:type", Object)
], MatchApiDto.prototype, "aggregate", void 0);
exports.MatchApiDto = MatchApiDto;
class MatchListApiDto {
}
__decorate([
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => MatchApiDto),
    __metadata("design:type", Array)
], MatchListApiDto.prototype, "matches", void 0);
exports.MatchListApiDto = MatchListApiDto;
//# sourceMappingURL=match-api.dto.js.map