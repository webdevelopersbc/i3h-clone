"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const nhlapi_module_1 = require("../nhlapi/nhlapi.module");
const teams_module_1 = require("../teams/teams.module");
const app_settings_schema_1 = require("./schemas/app-settings.schema");
const settings_controller_1 = require("./settings.controller");
const settings_service_1 = require("./settings.service");
const update_task_service_1 = require("./update-task.service");
let SettingsModule = class SettingsModule {
};
SettingsModule = __decorate([
    common_1.Module({
        controllers: [settings_controller_1.SettingsController],
        providers: [settings_service_1.SettingsService, update_task_service_1.UpdateTaskService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: app_settings_schema_1.AppSettings.name, schema: app_settings_schema_1.AppSettingsSchema },
            ]),
            nhlapi_module_1.NhlapiModule,
            teams_module_1.TeamsModule,
        ],
    })
], SettingsModule);
exports.SettingsModule = SettingsModule;
//# sourceMappingURL=settings.module.js.map