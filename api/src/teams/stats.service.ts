import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SeasonalStatsApiDto } from 'src/nhlapi/dtos/seasonal-stats-api.dto';
import { ClubStats } from './schemas/club-stats.schema';

@Injectable()
export class StatsService {
  constructor(
    @InjectModel(ClubStats.name) private clubStatsModel: Model<ClubStats>,
  ) {}

  async addStats(dto: SeasonalStatsApiDto, clubId: number): Promise<void> {
    const dbStats = await this.clubStatsModel.findOne({ clubId });

    if (dbStats) {
      await this.clubStatsModel.replaceOne({ clubId }, { ...dto, clubId });
      return;
    }

    const addedStats = new this.clubStatsModel({ ...dto, clubId });

    await addedStats.save();
  }
}
