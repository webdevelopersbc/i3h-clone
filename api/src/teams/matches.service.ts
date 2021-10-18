import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MatchListApiDto } from 'src/nhlapi/dtos/match-api.dto';
import { ClubMatch } from './schemas/club-match.schema';

@Injectable()
export class MatchesService {
  constructor(
    @InjectModel(ClubMatch.name) private clubMatchModel: Model<ClubMatch>,
  ) {}

  async addMatches(dto: MatchListApiDto, clubId: number): Promise<void> {
    for (const dtoMatch of dto.matches) {
      const dbMatch = await this.clubMatchModel.findOne({
        matchId: dtoMatch.matchId,
      });

      if (dbMatch) {
        continue;
      }

      const addedMatch = new this.clubMatchModel({ ...dtoMatch, clubId });

      await addedMatch.save();
    }
  }

  async findAll(): Promise<ClubMatch[]> {
    return this.clubMatchModel.find({}).exec();
  }
}
