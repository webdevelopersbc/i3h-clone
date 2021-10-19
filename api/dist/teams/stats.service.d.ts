import { Model } from 'mongoose';
import { SeasonalStatsApiDto } from 'src/nhlapi/dtos/seasonal-stats-api.dto';
import { ClubStats } from './schemas/club-stats.schema';
export declare class StatsService {
    private clubStatsModel;
    constructor(clubStatsModel: Model<ClubStats>);
    addStats(dto: SeasonalStatsApiDto, clubId: number): Promise<void>;
}
