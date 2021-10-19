import { Document } from 'mongoose';
import { IMembersPositionCount } from 'src/nhlapi/dtos/members-api.dto';
export declare class ClubMembers extends Document {
    clubId: number;
    members: Record<string, string>[];
    positionCount: Record<string, IMembersPositionCount>;
}
export declare const ClubMembersSchema: import("mongoose").Schema<any>;
