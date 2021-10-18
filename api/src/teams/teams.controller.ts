import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AddTeamsDto } from './dtos/add-teams.dto';
import { MatchesService } from './matches.service';
import { ClubMatch } from './schemas/club-match.schema';
import { Club } from './schemas/club.schema';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(
    private teamsService: TeamsService,
    private matchesService: MatchesService,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAll(): Promise<Club[]> {
    return this.teamsService.findAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async addTeams(@Body() addTeamsDto: AddTeamsDto): Promise<Club[]> {
    await this.teamsService.addTeams(addTeamsDto.teams);
    return this.teamsService.findAll();
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteTeam(@Param('id') id: number): Promise<Club[]> {
    await this.teamsService.delete(id);
    return this.teamsService.findAll();
  }

  @Get('matches')
  @UseGuards(JwtAuthGuard)
  async getAllMatches(): Promise<ClubMatch[]> {
    return this.matchesService.findAll();
  }
}
