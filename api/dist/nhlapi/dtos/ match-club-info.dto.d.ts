import { IMatchClubDetails, MatchClubDetailsApiDto } from './match-club-details.dto';
export declare class MatchClubInfoApiDto {
    cNhlOnlineGameType: string;
    losses: string;
    memberString: string;
    ppg: string;
    ppo: string;
    result: string;
    score: string;
    teamSide: string;
    toa: string;
    winnerByDnf: string;
    winnerByGoalieDnf: string;
    details: MatchClubDetailsApiDto;
    goals: string;
    goalsAgainst: string;
}
export interface IMatchClubInfo {
    cNhlOnlineGameType: string;
    losses: string;
    memberString: string;
    ppg: string;
    ppo: string;
    result: string;
    score: string;
    teamSide: string;
    toa: string;
    winnerByDnf: string;
    winnerByGoalieDnf: string;
    details: IMatchClubDetails;
    goals: string;
    goalsAgainst: string;
}
