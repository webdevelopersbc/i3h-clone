import { Document } from 'mongoose';
import { ICustomKit } from './custom-kit.interface';
export declare class Club extends Document {
    clubId: number;
    platform: string;
    name: string;
    regionId: number;
    teamId: number;
    customKit: ICustomKit;
}
export declare const ClubSchema: import("mongoose").Schema<any>;
