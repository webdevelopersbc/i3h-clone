import { MatchTimeAgoApiDto } from 'src/nhlapi/dtos/match-time-ago.dto';
import { MatchClubInfoApiDto } from './ match-club-info.dto';
import { MatchAggregateDto } from './match-aggregate.dto';
import { MatchPlayerApiDto } from './match-player.dto';
export declare class MatchApiDto {
    matchId: string;
    timestamp: number;
    timeAgo: MatchTimeAgoApiDto;
    clubs: {
        [key: string]: MatchClubInfoApiDto;
    };
    players: {
        [key: string]: MatchPlayerApiDto;
    };
    aggregate: {
        [key: string]: MatchAggregateDto;
    };
}
export declare class MatchListApiDto {
    matches: MatchApiDto[];
}
