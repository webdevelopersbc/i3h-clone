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
exports.TeamsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const add_teams_dto_1 = require("./dtos/add-teams.dto");
const matches_service_1 = require("./matches.service");
const teams_service_1 = require("./teams.service");
let TeamsController = class TeamsController {
    constructor(teamsService, matchesService) {
        this.teamsService = teamsService;
        this.matchesService = matchesService;
    }
    async getAll() {
        return this.teamsService.findAll();
    }
    async addTeams(addTeamsDto) {
        await this.teamsService.addTeams(addTeamsDto.teams);
        return this.teamsService.findAll();
    }
    async deleteTeam(id) {
        await this.teamsService.delete(id);
        return this.teamsService.findAll();
    }
    async getAllMatches() {
        return this.matchesService.findAll();
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "getAll", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_teams_dto_1.AddTeamsDto]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "addTeams", null);
__decorate([
    common_1.Delete(':id'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "deleteTeam", null);
__decorate([
    common_1.Get('matches'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "getAllMatches", null);
TeamsController = __decorate([
    common_1.Controller('teams'),
    __metadata("design:paramtypes", [teams_service_1.TeamsService,
        matches_service_1.MatchesService])
], TeamsController);
exports.TeamsController = TeamsController;
//# sourceMappingURL=teams.controller.js.map