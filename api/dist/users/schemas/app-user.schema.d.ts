import { Document } from 'mongoose';
export declare class AppUser extends Document {
    email: string;
    name: string;
    password: string;
    isAdmin: boolean;
}
export declare const AppUserSchema: import("mongoose").Schema<any>;
