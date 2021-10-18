import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { validate } from 'class-validator';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MatchesService } from 'src/teams/matches.service';
import { MembersService } from 'src/teams/members.service';
import { Club } from 'src/teams/schemas/club.schema';
import { StatsService } from 'src/teams/stats.service';
import { TeamsService } from 'src/teams/teams.service';
import { ClubMembersApiDto } from './dtos/members-api.dto';
import { SearchApiDTO } from './dtos/search.dto';
import { SeasonalStatsApiDto } from './dtos/seasonal-stats-api.dto';
import { UpdateResults } from './interfaces/update-results.interface';
import { NhlapiService } from './nhlapi.service';

@Controller('nhlapi')
export class NhlapiController {
  constructor(
    private nhlApi: NhlapiService,
    private teamsService: TeamsService,
    private membersService: MembersService,
    private statsService: StatsService,
    private matchService: MatchesService,
  ) {}

  @Get('update')
  @UseGuards(JwtAuthGuard)
  async update(): Promise<UpdateResults> {
    const clubs = await this.teamsService.findAll();
    let results: UpdateResults = {
      memberErrors: [],
      members: [],
      seasonStatsErrors: [],
      seasonStats: [],
      matchErrors: [],
    };

    if (!clubs || clubs.length < 1) {
      return results;
    }

    const membersResults = await this.updateMembers(clubs);
    const seasonalStatsResults = await this.updateSeasonalStats(clubs);
    const matchResults = await this.updateMatches(clubs);

    results = {
      ...results,
      memberErrors: membersResults.errors,
      members: membersResults.members,
      seasonStatsErrors: seasonalStatsResults.errors,
      seasonStats: seasonalStatsResults.stats,
      matchErrors: matchResults.errors.slice(1,2),
    };

    return results.matchErrors;
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  search(@Body() searchApiDTO: SearchApiDTO): Observable<any> {
    return this.nhlApi.search(searchApiDTO.platform, searchApiDTO.search);
  }

  private async updateMembers(
    clubs: Club[],
  ): Promise<{
    errors: Club[];
    members: Array<ClubMembersApiDto & { clubId: number }>;
  }> {
    const errors: Club[] = [];
    const members: Array<ClubMembersApiDto & { clubId: number }> = [];

    for (const club of clubs) {
      const memberSet = await this.nhlApi
        .updateMembers(club.platform, club.clubId)
        .toPromise();

      if (!memberSet) {
        errors.push(club);
        continue;
      }

      const validationErrors = await validate(memberSet);

      if (validationErrors.length > 0) {
        errors.push(club);
        continue;
      }

      members.push({ clubId: club.clubId, ...memberSet });
      await this.membersService.addMembers(memberSet, club.clubId);
    }

    return { errors, members };
  }

  private async updateSeasonalStats(
    clubs: Club[],
  ): Promise<{
    errors: Club[];
    stats: Array<Omit<SeasonalStatsApiDto, 'clubId'> & { clubId: number }>;
  }> {
    const errors: Club[] = [];
    const stats: Array<Omit<SeasonalStatsApiDto, 'clubId'> & {
      clubId: number;
    }> = [];

    for (const club of clubs) {
      const statSet = await this.nhlApi
        .updateStats(club.platform, club.clubId)
        .toPromise();

      if (!statSet) {
        errors.push(club);
        continue;
      }

      const validationErrors = await validate(statSet);
      if (validationErrors.length > 0) {
        errors.push(club);
        continue;
      }

      stats.push({ ...statSet, clubId: club.clubId });
      await this.statsService.addStats(statSet, club.clubId);
    }

    return { errors, stats };
  }

  private async updateMatches(
    clubs: Club[],
  ): Promise<{
    errors: { club: Club; errors: any }[];
  }> {
    const errors: { club: Club; errors: any }[] = [];

    for (const club of clubs) {
      const matches = await this.nhlApi
        .updateMatches(club.platform, club.clubId)
        .toPromise();

      if (!matches || !matches.matches || matches.matches.length < 1) {
        errors.push({ club, errors: 'No matches' });
        continue;
      }

      const validationErrors = await validate(matches);
      if (validationErrors.length > 0) {
        errors.push({ club, errors: validationErrors });
        continue;
      }

      await this.matchService.addMatches(matches, club.clubId);
    }

    return { errors };
  }
}
