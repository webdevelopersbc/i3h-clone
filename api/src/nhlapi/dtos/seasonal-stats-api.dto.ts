import { IsNumber, IsString } from 'class-validator';

export class SeasonalStatsApiDto {
  @IsString()
  rank: string;
  @IsString()
  clubname: string;
  @IsNumber()
  seasons: number;
  @IsString()
  divGroupsWon: string;
  @IsString()
  leaguesWon: string;
  @IsString()
  divGroupsWon1: string;
  @IsString()
  divGroupsWon2: string;
  @IsString()
  divGroupsWon3: string;
  @IsString()
  divGroupsWon4: string;
  @IsString()
  cupsWon1: string;
  @IsString()
  cupsWon2: string;
  @IsString()
  cupsWon3: string;
  @IsString()
  cupsWon4: string;
  @IsString()
  cupsWon5: string;
  @IsString()
  cupsElim1: string;
  @IsString()
  cupsElim2: string;
  @IsString()
  cupsElim3: string;
  @IsString()
  cupsElim4: string;
  @IsString()
  cupsElim5: string;
  @IsString()
  promotions: string;
  @IsString()
  holds: string;
  @IsString()
  relegations: string;
  @IsString()
  rankingPoints: string;
  @IsString()
  curCompetition: string;
  @IsString()
  prevDivision: string;
  @IsString()
  prevGameDivision: string;
  @IsNumber()
  bestDivision: number;
  @IsString()
  bestPoints: string;
  @IsString()
  curSeasonMov: string;
  @IsString()
  recentResult0: string;
  @IsString()
  recentResult1: string;
  @IsString()
  recentResult2: string;
  @IsString()
  recentResult3: string;
  @IsString()
  recentResult4: string;
  @IsString()
  recentResult5: string;
  @IsString()
  recentResult6: string;
  @IsString()
  recentResult7: string;
  @IsString()
  recentResult8: string;
  @IsString()
  recentResult9: string;
  @IsString()
  recentOpponent0: string;
  @IsString()
  recentOpponent1: string;
  @IsString()
  recentOpponent2: string;
  @IsString()
  recentOpponent3: string;
  @IsString()
  recentOpponent4: string;
  @IsString()
  recentOpponent5: string;
  @IsString()
  recentOpponent6: string;
  @IsString()
  recentOpponent7: string;
  @IsString()
  recentOpponent8: string;
  @IsString()
  recentOpponent9: string;
  @IsString()
  recentScore0: string;
  @IsString()
  recentScore1: string;
  @IsString()
  recentScore2: string;
  @IsString()
  recentScore3: string;
  @IsString()
  recentScore4: string;
  @IsString()
  recentScore5: string;
  @IsString()
  recentScore6: string;
  @IsString()
  recentScore7: string;
  @IsString()
  recentScore8: string;
  @IsString()
  recentScore9: string;
  @IsString()
  wins: string;
  @IsString()
  losses: string;
  @IsString()
  ties: string;
  @IsString()
  otl: string;
  @IsString()
  prevSeasonWins: string;
  @IsString()
  prevSeasonLosses: string;
  @IsString()
  prevSeasonTies: string;
  @IsString()
  prevSeasonOtl: string;
  @IsString()
  goals: string;
  @IsString()
  goalsAgainst: string;
  @IsString()
  starLevel: string;
  @IsNumber()
  totalCupsWon: number;
  @IsString()
  cupsEntered: string;
  @IsString()
  cupWinPercent: string;
  @IsString()
  titlesWon: string;
  @IsString()
  prevGameWonTitle: string;
  @IsString()
  record: string;
  @IsString()
  clubId: string;
  @IsNumber()
  divsWon1: number;
  @IsNumber()
  divsWon2: number;
  @IsNumber()
  divsWon3: number;
  @IsNumber()
  divsWon4: number;
  @IsNumber()
  currentDivision: number;
  @IsString({ each: true })
  recentResults?: string[];
  @IsNumber()
  totalGames: number;
}
