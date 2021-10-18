import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppSettingsDto } from './dtos/app-settings.dto';
import { AppSettings } from './schemas/app-settings.schema';
import { UpdateTaskService } from './update-task.service';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel(AppSettings.name) private settingsModel: Model<AppSettings>,
    private updateTaskService: UpdateTaskService,
  ) {}

  async get(): Promise<AppSettings> {
    const settings = await this.settingsModel.find().exec();

    if (!settings.length) {
      throw new NotFoundException();
    }

    return settings[0];
  }

  async update(dto: AppSettingsDto): Promise<AppSettings> {
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
}
