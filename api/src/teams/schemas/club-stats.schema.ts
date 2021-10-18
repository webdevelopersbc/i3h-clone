import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ClubStats extends Document {
  @Prop({ required: true, createIndex: true, dropDupes: true })
  clubId: number;
  @Prop()
  rank: string;
  @Prop()
  clubname: string;
  @Prop()
  seasons: number;
  @Prop()
  divGroupsWon: string;
  @Prop()
  leaguesWon: string;
  @Prop()
  divGroupsWon1: string;
  @Prop()
  divGroupsWon2: string;
  @Prop()
  divGroupsWon3: string;
  @Prop()
  divGroupsWon4: string;
  @Prop()
  cupsWon1: string;
  @Prop()
  cupsWon2: string;
  @Prop()
  cupsWon3: string;
  @Prop()
  cupsWon4: string;
  @Prop()
  cupsWon5: string;
  @Prop()
  cupsElim1: string;
  @Prop()
  cupsElim2: string;
  @Prop()
  cupsElim3: string;
  @Prop()
  cupsElim4: string;
  @Prop()
  cupsElim5: string;
  @Prop()
  promotions: string;
  @Prop()
  holds: string;
  @Prop()
  relegations: string;
  @Prop()
  rankingPoints: string;
  @Prop()
  curCompetition: string;
  @Prop()
  prevDivision: string;
  @Prop()
  prevGameDivision: string;
  @Prop()
  bestDivision: number;
  @Prop()
  bestPoints: string;
  @Prop()
  curSeasonMov: string;
  @Prop()
  recentResult0: string;
  @Prop()
  recentResult1: string;
  @Prop()
  recentResult2: string;
  @Prop()
  recentResult3: string;
  @Prop()
  recentResult4: string;
  @Prop()
  recentResult5: string;
  @Prop()
  recentResult6: string;
  @Prop()
  recentResult7: string;
  @Prop()
  recentResult8: string;
  @Prop()
  recentResult9: string;
  @Prop()
  recentOpponent0: string;
  @Prop()
  recentOpponent1: string;
  @Prop()
  recentOpponent2: string;
  @Prop()
  recentOpponent3: string;
  @Prop()
  recentOpponent4: string;
  @Prop()
  recentOpponent5: string;
  @Prop()
  recentOpponent6: string;
  @Prop()
  recentOpponent7: string;
  @Prop()
  recentOpponent8: string;
  @Prop()
  recentOpponent9: string;
  @Prop()
  recentScore0: string;
  @Prop()
  recentScore1: string;
  @Prop()
  recentScore2: string;
  @Prop()
  recentScore3: string;
  @Prop()
  recentScore4: string;
  @Prop()
  recentScore5: string;
  @Prop()
  recentScore6: string;
  @Prop()
  recentScore7: string;
  @Prop()
  recentScore8: string;
  @Prop()
  recentScore9: string;
  @Prop()
  wins: string;
  @Prop()
  losses: string;
  @Prop()
  ties: string;
  @Prop()
  otl: string;
  @Prop()
  prevSeasonWins: string;
  @Prop()
  prevSeasonLosses: string;
  @Prop()
  prevSeasonTies: string;
  @Prop()
  prevSeasonOtl: string;
  @Prop()
  goals: string;
  @Prop()
  goalsAgainst: string;
  @Prop()
  starLevel: string;
  @Prop()
  totalCupsWon: number;
  @Prop()
  cupsEntered: string;
  @Prop()
  cupWinPercent: string;
  @Prop()
  titlesWon: string;
  @Prop()
  prevGameWonTitle: string;
  @Prop()
  record: string;
  @Prop()
  divsWon1: number;
  @Prop()
  divsWon2: number;
  @Prop()
  divsWon3: number;
  @Prop()
  divsWon4: number;
  @Prop()
  currentDivision: number;
  @Prop([String])
  recentResults?: string[];
  @Prop()
  totalGames: number;
}

export const ClubStatsSchema = SchemaFactory.createForClass(ClubStats);
