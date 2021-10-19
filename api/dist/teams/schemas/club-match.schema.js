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
exports.ClubMatchSchema = exports.ClubMatch = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const _match_club_info_dto_1 = require("../../nhlapi/dtos/ match-club-info.dto");
const match_aggregate_dto_1 = require("../../nhlapi/dtos/match-aggregate.dto");
const match_player_dto_1 = require("../../nhlapi/dtos/match-player.dto");
let ClubMatch = class ClubMatch extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop({ required: true, createIndex: true }),
    __metadata("design:type", Number)
], ClubMatch.prototype, "clubId", void 0);
__decorate([
    mongoose_1.Prop({ required: true, createIndex: true, dropDupes: true }),
    __metadata("design:type", String)
], ClubMatch.prototype, "matchId", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], ClubMatch.prototype, "timestamp", void 0);
__decorate([
    mongoose_1.Prop(mongoose_1.raw({
        number: { type: Number },
        unit: { type: String },
    })),
    __metadata("design:type", Object)
], ClubMatch.prototype, "timeAgo", void 0);
__decorate([
    mongoose_1.Prop(mongoose_1.raw({
        type: Map,
        of: Map,
    })),
    __metadata("design:type", Object)
], ClubMatch.prototype, "clubs", void 0);
__decorate([
    mongoose_1.Prop(mongoose_1.raw({
        type: Map,
        of: Map,
    })),
    __metadata("design:type", Object)
], ClubMatch.prototype, "players", void 0);
__decorate([
    mongoose_1.Prop(mongoose_1.raw({
        type: Map,
        of: Map,
    })),
    __metadata("design:type", Object)
], ClubMatch.prototype, "aggregate", void 0);
ClubMatch = __decorate([
    mongoose_1.Schema()
], ClubMatch);
exports.ClubMatch = ClubMatch;
exports.ClubMatchSchema = mongoose_1.SchemaFactory.createForClass(ClubMatch);
//# sourceMappingURL=club-match.schema.js.map