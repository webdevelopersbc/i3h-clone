import { Document } from 'mongoose';
export declare class AppSettings extends Document {
    timeOfDay: string;
    timeZone: string;
}
export declare const AppSettingsSchema: import("mongoose").Schema<any>;
