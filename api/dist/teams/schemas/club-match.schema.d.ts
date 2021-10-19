import { Document } from 'mongoose';
import { IMatchClubInfo } from 'src/nhlapi/dtos/ match-club-info.dto';
import { IMatchAggregate } from 'src/nhlapi/dtos/match-aggregate.dto';
import { IMatchPlayer } from 'src/nhlapi/dtos/match-player.dto';
import { IMatchTimeAgo } from '../../nhlapi/dtos/match-time-ago.dto';
export declare class ClubMatch extends Document {
    clubId: number;
    matchId: string;
    timestamp: number;
    timeAgo: Record<string, IMatchTimeAgo>;
    clubs: Record<string, IMatchClubInfo>;
    players: Record<string, IMatchPlayer>;
    aggregate: Record<string, IMatchAggregate>;
}
export declare const ClubMatchSchema: import("mongoose").Schema<any>;
