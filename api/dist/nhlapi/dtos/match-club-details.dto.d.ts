import { IMatchClubCustomKit, MatchClubCustomKitApiDto } from './match-club-kit.dto';
export declare class MatchClubDetailsApiDto {
    name: string;
    clubId: number;
    regionId: number;
    teamId: number;
    customKit: MatchClubCustomKitApiDto;
}
export interface IMatchClubDetails {
    name: string;
    clubId: number;
    regionId: number;
    teamId: number;
    customKit: IMatchClubCustomKit;
}
