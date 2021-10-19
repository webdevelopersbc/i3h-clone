import { IMatchClubInfo, MatchClubInfoApiDto } from './ match-club-info.dto';
export declare class MatchClubsContainerDto {
    clubs: {
        [key: string]: MatchClubInfoApiDto;
    };
}
export interface IMatchClubsContainerDto {
    clubs: {
        [key: string]: IMatchClubInfo;
    };
}
