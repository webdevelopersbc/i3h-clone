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
exports.ClubMembersApiDto = exports.MembersPlayerApiDto = exports.MembersPositionCountApiDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class MembersPositionCountApiDto {
}
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], MembersPositionCountApiDto.prototype, "forwards", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], MembersPositionCountApiDto.prototype, "goalie", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], MembersPositionCountApiDto.prototype, "defenseMen", void 0);
exports.MembersPositionCountApiDto = MembersPositionCountApiDto;
class MembersPlayerApiDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "wins", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "losses", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "otl", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "winnerByDnf", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skwins", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "sklosses", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skotl", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skwinnerByDnf", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skgoals", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skassists", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skpoints", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skgwg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skplusmin", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "sktoi", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skpim", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skppg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skshg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skoffsides", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skfights", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skfightswon", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skfo", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skfow", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skfol", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skfop", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skhits", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skbs", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skshots", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skshotspg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skdekes", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skdekesmade", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skgiveaways", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "sktakeaways", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skscrnchances", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skscrngoals", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skbreakaways", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skgc", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skgcFC", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skhattricks", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skprevgoals", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skprevassists", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glwins", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "gllosses", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glotl", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glwinnerByDnf", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glshots", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glsaves", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glsavepct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "gltoi", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glga", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glgaa", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glso", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glsoperiods", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "gldsaves", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glbrkshots", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glbrksaves", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glbrksavepct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glpenshots", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glpensaves", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glpensavepct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glsoshots", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glsosaves", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glsosavepct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glrecord", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glpokechecks", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glgc", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glgcFC", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glprevwins", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glprevso", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glgp", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "lwgp", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "rwgp", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "cgp", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "dgp", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skgp", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "gamesplayed", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "gamesCompleted", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "gamesCompletedFC", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "lwQuitDisc", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "rwQuitDisc", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "cQuitDisc", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "dQuitDisc", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glQuitDisc", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skDNF", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "lwDNF", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "rwDNF", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "cDNF", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "dDNF", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glDNF", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glDNFmm", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "playerQuitDisc", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "playerDNF", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glggppct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glgaapct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "glgpmin", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skpointspg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skpointspgpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skhitspgpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skplusminpgpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skbspgpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "sktakeawaypg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "sktkgvpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skshotpgpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skfopgpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "skpointspct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "favoritePosition", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "goals", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "assists", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "points", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "gwg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "plusmin", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "toi", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "pim", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "ppg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "shg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "offsides", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "fights", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "fightswon", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "fo", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "fow", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "fol", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "fop", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "hits", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "bs", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "shots", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "shotpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "shotspg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "dekes", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "dekesmade", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "giveaways", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "takeaways", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "scrnchances", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "scrngoals", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "breakaways", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "gc", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "gcFC", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "hattricks", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "prevgoals", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "prevassists", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "gp", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "DNF", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "pointspg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "pointspgpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "hitspgpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "plusminpgpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "bspgpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "takeawaypg", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "tkgvpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "shotpgpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "fopgpct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "pointspct", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MembersPlayerApiDto.prototype, "name", void 0);
exports.MembersPlayerApiDto = MembersPlayerApiDto;
class ClubMembersApiDto {
}
__decorate([
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => MembersPlayerApiDto),
    __metadata("design:type", Array)
], ClubMembersApiDto.prototype, "members", void 0);
__decorate([
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => MembersPositionCountApiDto),
    __metadata("design:type", MembersPositionCountApiDto)
], ClubMembersApiDto.prototype, "positionCount", void 0);
exports.ClubMembersApiDto = ClubMembersApiDto;
//# sourceMappingURL=members-api.dto.js.map