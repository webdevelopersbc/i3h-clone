import { Model } from 'mongoose';
import { AppSettingsDto } from './dtos/app-settings.dto';
import { AppSettings } from './schemas/app-settings.schema';
import { UpdateTaskService } from './update-task.service';
export declare class SettingsService {
    private settingsModel;
    private updateTaskService;
    constructor(settingsModel: Model<AppSettings>, updateTaskService: UpdateTaskService);
    get(): Promise<AppSettings>;
    update(dto: AppSettingsDto): Promise<AppSettings>;
}
