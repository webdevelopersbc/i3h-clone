import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchesService } from './matches.service';
import { MembersService } from './members.service';
import { ClubMatch, ClubMatchSchema } from './schemas/club-match.schema';
import { ClubMembers, ClubMembersSchema } from './schemas/club-members.schema';
import { ClubStats, ClubStatsSchema } from './schemas/club-stats.schema';
import { Club, ClubSchema } from './schemas/club.schema';
import { StatsService } from './stats.service';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Club.name, schema: ClubSchema },
      { name: ClubMembers.name, schema: ClubMembersSchema },
      { name: ClubStats.name, schema: ClubStatsSchema },
      { name: ClubMatch.name, schema: ClubMatchSchema },
    ]),
  ],
  controllers: [TeamsController],
  providers: [TeamsService, MembersService, StatsService, MatchesService],
  exports: [TeamsService, MembersService, StatsService, MatchesService],
})
export class TeamsModule {}
