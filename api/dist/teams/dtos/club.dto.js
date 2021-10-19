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
exports.ClubDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const custom_kit_dto_1 = require("./custom-kit.dto");
class ClubDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ClubDto.prototype, "clubId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ClubDto.prototype, "platform", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ClubDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ClubDto.prototype, "regionId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ClubDto.prototype, "teamId", void 0);
__decorate([
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => custom_kit_dto_1.CustomKitDto),
    __metadata("design:type", custom_kit_dto_1.CustomKitDto)
], ClubDto.prototype, "customKit", void 0);
exports.ClubDto = ClubDto;
//# sourceMappingURL=club.dto.js.map