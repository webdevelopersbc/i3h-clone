"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhlapiModule = void 0;
const common_1 = require("@nestjs/common");
const teams_module_1 = require("../teams/teams.module");
const nhlapi_controller_1 = require("./nhlapi.controller");
const nhlapi_service_1 = require("./nhlapi.service");
let NhlapiModule = class NhlapiModule {
};
NhlapiModule = __decorate([
    common_1.Module({
        controllers: [nhlapi_controller_1.NhlapiController],
        imports: [common_1.HttpModule, teams_module_1.TeamsModule],
        providers: [nhlapi_service_1.NhlapiService],
        exports: [nhlapi_service_1.NhlapiService],
    })
], NhlapiModule);
exports.NhlapiModule = NhlapiModule;
//# sourceMappingURL=nhlapi.module.js.map