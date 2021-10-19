import { AppSettingsDto } from './dtos/app-settings.dto';
import { AppSettings } from './schemas/app-settings.schema';
import { SettingsService } from './settings.service';
export declare class SettingsController {
    private settingsService;
    constructor(settingsService: SettingsService);
    getSettings(): Promise<AppSettings>;
    update(update: AppSettingsDto): Promise<AppSettings>;
}
