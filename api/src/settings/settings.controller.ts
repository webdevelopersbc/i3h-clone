import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AppSettingsDto } from './dtos/app-settings.dto';
import { AppSettings } from './schemas/app-settings.schema';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private settingsService: SettingsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getSettings(): Promise<AppSettings> {
    return this.settingsService.get();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async update(@Body() update: AppSettingsDto): Promise<AppSettings> {
    return this.settingsService.update(update);
  }
}
