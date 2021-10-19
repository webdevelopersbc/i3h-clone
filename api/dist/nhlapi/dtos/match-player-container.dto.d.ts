import { IMatchPlayer, MatchPlayerApiDto } from './match-player.dto';
export declare class MatchPlayerContainerDto {
    players: {
        [key: string]: MatchPlayerApiDto;
    };
}
export interface IMatchPlayerContainer {
    players: {
        [key: string]: IMatchPlayer;
    };
}
