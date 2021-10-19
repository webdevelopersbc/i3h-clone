import { Model } from 'mongoose';
import { MatchListApiDto } from 'src/nhlapi/dtos/match-api.dto';
import { ClubMatch } from './schemas/club-match.schema';
export declare class MatchesService {
    private clubMatchModel;
    constructor(clubMatchModel: Model<ClubMatch>);
    addMatches(dto: MatchListApiDto, clubId: number): Promise<void>;
    findAll(): Promise<ClubMatch[]>;
}
