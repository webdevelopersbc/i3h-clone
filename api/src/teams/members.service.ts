import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClubMembersApiDto } from 'src/nhlapi/dtos/members-api.dto';
import { ClubMembers } from './schemas/club-members.schema';

@Injectable()
export class MembersService {
  constructor(
    @InjectModel(ClubMembers.name) private clubMembersModel: Model<ClubMembers>,
  ) {}

  async addMembers(dto: ClubMembersApiDto, clubId: number): Promise<void> {
    const dbTeam = await this.clubMembersModel.findOne({ clubId });

    if (dbTeam) {
      await this.clubMembersModel.replaceOne({ clubId }, { ...dto, clubId });
      return;
    }

    const addedMembers = new this.clubMembersModel({ ...dto, clubId });

    await addedMembers.save();
  }
}
