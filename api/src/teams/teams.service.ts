import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClubDto } from './dtos/club.dto';
import { Club } from './schemas/club.schema';

@Injectable()
export class TeamsService {
  constructor(@InjectModel(Club.name) private clubModel: Model<Club>) {}

  async addTeams(teams: ClubDto[]): Promise<void> {
    for (const team of teams) {
      const dbTeam = await this.clubModel.findOne({ clubId: team.clubId });

      if (!dbTeam) {
        const addedTeam = new this.clubModel({
          clubId: team.clubId,
          platform: team.platform,
          name: team.name,
          regionId: team.regionId,
          teamId: team.teamId,
          customKit: team.customKit,
        });
        await addedTeam.save();
      }
    }
  }

  async delete(id: number): Promise<Club> {
    const club = await this.clubModel.findOne({ clubId: id });

    if (!club) {
      throw new NotFoundException();
    }

    return club.deleteOne();
  }

  async findAll(): Promise<Club[]> {
    return this.clubModel.find().exec();
  }
}
