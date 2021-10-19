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
exports.ClubMembersSchema = exports.ClubMembers = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const members_api_dto_1 = require("../../nhlapi/dtos/members-api.dto");
let ClubMembers = class ClubMembers extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop({ required: true, createIndex: true, dropDupes: true }),
    __metadata("design:type", Number)
], ClubMembers.prototype, "clubId", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], ClubMembers.prototype, "members", void 0);
__decorate([
    mongoose_1.Prop(mongoose_1.raw({
        forwards: { type: Number },
        goalie: { type: Number },
        defenseMen: { type: Number },
    })),
    __metadata("design:type", Object)
], ClubMembers.prototype, "positionCount", void 0);
ClubMembers = __decorate([
    mongoose_1.Schema()
], ClubMembers);
exports.ClubMembers = ClubMembers;
exports.ClubMembersSchema = mongoose_1.SchemaFactory.createForClass(ClubMembers);
//# sourceMappingURL=club-members.schema.js.map