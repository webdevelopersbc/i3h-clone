"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const matches_service_1 = require("./matches.service");
const members_service_1 = require("./members.service");
const club_match_schema_1 = require("./schemas/club-match.schema");
const club_members_schema_1 = require("./schemas/club-members.schema");
const club_stats_schema_1 = require("./schemas/club-stats.schema");
const club_schema_1 = require("./schemas/club.schema");
const stats_service_1 = require("./stats.service");
const teams_controller_1 = require("./teams.controller");
const teams_service_1 = require("./teams.service");
let TeamsModule = class TeamsModule {
};
TeamsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: club_schema_1.Club.name, schema: club_schema_1.ClubSchema },
                { name: club_members_schema_1.ClubMembers.name, schema: club_members_schema_1.ClubMembersSchema },
                { name: club_stats_schema_1.ClubStats.name, schema: club_stats_schema_1.ClubStatsSchema },
                { name: club_match_schema_1.ClubMatch.name, schema: club_match_schema_1.ClubMatchSchema },
            ]),
        ],
        controllers: [teams_controller_1.TeamsController],
        providers: [teams_service_1.TeamsService, members_service_1.MembersService, stats_service_1.StatsService, matches_service_1.MatchesService],
        exports: [teams_service_1.TeamsService, members_service_1.MembersService, stats_service_1.StatsService, matches_service_1.MatchesService],
    })
], TeamsModule);
exports.TeamsModule = TeamsModule;
//# sourceMappingURL=teams.module.js.map