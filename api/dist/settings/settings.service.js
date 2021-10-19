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
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_settings_schema_1 = require("./schemas/app-settings.schema");
const update_task_service_1 = require("./update-task.service");
let SettingsService = class SettingsService {
    constructor(settingsModel, updateTaskService) {
        this.settingsModel = settingsModel;
        this.updateTaskService = updateTaskService;
    }
    async get() {
        const settings = await this.settingsModel.find().exec();
        if (!settings.length) {
            throw new common_1.NotFoundException();
        }
        return settings[0];
    }
    async update(dto) {
        const settings = await this.settingsModel.find().exec();
        if (!settings.length) {
            const createdSettings = new this.settingsModel(dto);
            const updatedSettings = await createdSettings.save();
            await this.updateTaskService.createUpdateTaskFromSettings();
            return updatedSettings;
        }
        const target = settings[0];
        target.timeOfDay = dto.timeOfDay;
        target.timeZone = dto.timeZone;
        const updatedSettings = await target.save();
        await this.updateTaskService.createUpdateTaskFromSettings();
        return updatedSettings;
    }
};
SettingsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(app_settings_schema_1.AppSettings.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        update_task_service_1.UpdateTaskService])
], SettingsService);
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map