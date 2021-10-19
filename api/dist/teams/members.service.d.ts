import { Model } from 'mongoose';
import { ClubMembersApiDto } from 'src/nhlapi/dtos/members-api.dto';
import { ClubMembers } from './schemas/club-members.schema';
export declare class MembersService {
    private clubMembersModel;
    constructor(clubMembersModel: Model<ClubMembers>);
    addMembers(dto: ClubMembersApiDto, clubId: number): Promise<void>;
}
