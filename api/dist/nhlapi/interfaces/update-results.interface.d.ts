import { Club } from 'src/teams/schemas/club.schema';
import { ClubMembersApiDto } from '../dtos/members-api.dto';
import { SeasonalStatsApiDto } from '../dtos/seasonal-stats-api.dto';
export interface UpdateResults {
    memberErrors: Club[];
    members: Array<ClubMembersApiDto & {
        clubId: number;
    }>;
    seasonStatsErrors: Club[];
    seasonStats: Array<Omit<SeasonalStatsApiDto, 'clubId'> & {
        clubId: number;
    }>;
    matchErrors: any;
}
