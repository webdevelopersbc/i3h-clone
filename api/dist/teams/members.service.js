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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const members_api_dto_1 = require("../nhlapi/dtos/members-api.dto");
const club_members_schema_1 = require("./schemas/club-members.schema");
let MembersService = class MembersService {
    constructor(clubMembersModel) {
        this.clubMembersModel = clubMembersModel;
    }
    async addMembers(dto, clubId) {
        const dbTeam = await this.clubMembersModel.findOne({ clubId });
        if (dbTeam) {
            await this.clubMembersModel.replaceOne({ clubId }, Object.assign(Object.assign({}, dto), { clubId }));
            return;
        }
        const addedMembers = new this.clubMembersModel(Object.assign(Object.assign({}, dto), { clubId }));
        await addedMembers.save();
    }
};
MembersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(club_members_schema_1.ClubMembers.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MembersService);
exports.MembersService = MembersService;
//# sourceMappingURL=members.service.js.map