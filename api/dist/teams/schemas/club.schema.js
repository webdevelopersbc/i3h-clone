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
exports.ClubSchema = exports.Club = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Club = class Club extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop({ required: true, createIndex: true, dropDupes: true }),
    __metadata("design:type", Number)
], Club.prototype, "clubId", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Club.prototype, "platform", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Club.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Number)
], Club.prototype, "regionId", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Number)
], Club.prototype, "teamId", void 0);
__decorate([
    mongoose_1.Prop(mongoose_1.raw({
        isCustomTeam: { type: String },
        crestAssetId: { type: String },
        useBaseAsset: { type: String },
    })),
    __metadata("design:type", Object)
], Club.prototype, "customKit", void 0);
Club = __decorate([
    mongoose_1.Schema()
], Club);
exports.Club = Club;
exports.ClubSchema = mongoose_1.SchemaFactory.createForClass(Club);
//# sourceMappingURL=club.schema.js.map