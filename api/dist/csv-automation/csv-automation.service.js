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
exports.CsvAutomationService = void 0;
const common_1 = require("@nestjs/common");
const matches_service_1 = require("../teams/matches.service");
const club_match_schema_1 = require("../teams/schemas/club-match.schema");
const moment = require("moment");
const match_player_dto_1 = require("../nhlapi/dtos/match-player.dto");
const papa = require("papaparse");
let CsvAutomationService = class CsvAutomationService {
    constructor(matchesService) {
        this.matchesService = matchesService;
    }
    async matchesToCsv(matches) {
        var _a, _b;
        const matchObjects = matches.map(match => match.toObject());
        const output = {
            fields: [
                'Date',
                'Time',
                'Venue',
                'Teams',
                'Result',
                'Outcome',
                'Player',
                'POS',
                'G',
                'A',
                'P',
                'S',
                'S%',
                '+/-',
                'H',
                'FOW',
                'FOL',
                'FO%',
                'GVA',
                'TKA',
                'GWG',
                'SA',
                'GA',
                'SV',
                'SV%',
                'PSA',
                'PSSV',
                'PSSV%',
            ],
            data: [],
        };
        for (const match of matchObjects) {
            const eventDate = moment.unix(match.timestamp);
            const teams = [...match.clubs.keys()].map(key => match.clubs.get(key));
            const playersAMap = [
                ...match.players.keys(),
            ].map(key => match.players.get(key))[0];
            const playersBMap = [
                ...match.players.keys(),
            ].map(key => match.players.get(key))[1];
            const playersA = [...playersAMap.keys()].map(key => playersAMap.get(key));
            const playersB = [...playersBMap.keys()].map(key => playersBMap.get(key));
            const rowOne = [
                eventDate.format('YYYY-MM-DD'),
                eventDate.format('HH-MM-SS'),
                '',
                ((_a = teams[0].get('details')) === null || _a === void 0 ? void 0 : _a.name) || 'Unkown',
                teams[0].get('score'),
                teams[0].get('result'),
                ...this.getPlayerStrings(playersA[0]),
            ];
            const playersALines = [];
            for (let i = 1, len = playersA.length; i < len; i++) {
                playersALines.push([
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    ...this.getPlayerStrings(playersA[i]),
                ]);
            }
            const teamB = [
                '',
                '',
                '',
                ((_b = teams[1].get('details')) === null || _b === void 0 ? void 0 : _b.name) || 'Unkown',
                teams[1].get('score'),
                teams[1].get('result'),
                ...this.getPlayerStrings(playersB[0]),
            ];
            const playersBLines = [];
            for (let i = 1, len = playersB.length; i < len; i++) {
                playersBLines.push([
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    ...this.getPlayerStrings(playersB[i]),
                ]);
            }
            output.data = [
                ...output.data,
                rowOne,
                ...playersALines,
                teamB,
                ...playersBLines,
            ];
        }
        return papa.unparse(output);
    }
    getPlayerStrings(player) {
        return [
            player.playername,
            player.position,
            player.skgoals,
            player.skassists,
            (parseInt(player.skgoals, 10) + parseInt(player.skassists, 10)).toString(),
            player.skshots,
            player.skshotpct,
            player.skplusmin,
            player.skhits,
            player.skfow,
            player.skfol,
            player.skfopct,
            player.skgiveaways,
            player.sktakeaways,
            player.skgwg,
            player.glshots,
            player.glga,
            player.glsaves,
            player.glsavepct,
            player.glpenshots,
            player.glpensaves,
            player.glpensavepct,
        ];
    }
};
CsvAutomationService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [matches_service_1.MatchesService])
], CsvAutomationService);
exports.CsvAutomationService = CsvAutomationService;
//# sourceMappingURL=csv-automation.service.js.map