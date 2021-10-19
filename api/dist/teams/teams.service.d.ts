import { Model } from 'mongoose';
import { ClubDto } from './dtos/club.dto';
import { Club } from './schemas/club.schema';
export declare class TeamsService {
    private clubModel;
    constructor(clubModel: Model<Club>);
    addTeams(teams: ClubDto[]): Promise<void>;
    delete(id: number): Promise<Club>;
    findAll(): Promise<Club[]>;
}
