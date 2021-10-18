import { IsIn, IsString } from 'class-validator';

export class MatchPlayerApiDto {
  @IsString()
  class: string;

  @IsString()
  glbrksavepct: string;

  @IsString()
  glbrksaves: string;

  @IsString()
  glbrkshots: string;

  @IsString()
  gldsaves: string;

  @IsString()
  glga: string;

  @IsString()
  glgaa: string;

  @IsString()
  glOverallMmr: string;

  @IsString()
  glpensavepct: string;

  @IsString()
  glpensaves: string;

  @IsString()
  glpenshots: string;

  @IsString()
  glpokechecks: string;

  @IsString()
  glsavepct: string;

  @IsString()
  glsaves: string;

  @IsString()
  glshots: string;

  @IsString()
  player_dnf: string;

  @IsString()
  playerLevel: string;

  @IsString()
  playername: string;

  @IsString()
  pNhlOnlineGameType: string;

  @IsString()
  @IsIn(['center', 'defenseMen', 'goalie', 'leftWing'])
  position: string;

  @IsString()
  posSorted: string;

  @IsString()
  ratingDefense: string;

  @IsString()
  ratingOffense: string;

  @IsString()
  ratingTeamplay: string;

  @IsString()
  skassists: string;

  @IsString()
  skbs: string;

  @IsString()
  skfol: string;

  @IsString()
  skfopct: string;

  @IsString()
  skfow: string;

  @IsString()
  skgiveaways: string;

  @IsString()
  skgoals: string;

  @IsString()
  skgwg: string;

  @IsString()
  skhits: string;

  @IsString()
  skOverallMmr: string;

  @IsString()
  skpim: string;

  @IsString()
  skplusmin: string;

  @IsString()
  skppg: string;

  @IsString()
  skshg: string;

  @IsString()
  skshotpct: string;

  @IsString()
  skshots: string;

  @IsString()
  sktakeaways: string;

  @IsString()
  teamSide: string;

  @IsString()
  toi: string;

  @IsString()
  toiseconds: string;
}

export interface IMatchPlayer {
  class: string;
  glbrksavepct: string;
  glbrksaves: string;
  glbrkshots: string;
  gldsaves: string;
  glga: string;
  glgaa: string;
  glOverallMmr: string;
  glpensavepct: string;
  glpensaves: string;
  glpenshots: string;
  glpokechecks: string;
  glsavepct: string;
  glsaves: string;
  glshots: string;
  player_dnf: string;
  playerLevel: string;
  playername: string;
  pNhlOnlineGameType: string;
  position: string;
  posSorted: string;
  ratingDefense: string;
  ratingOffense: string;
  ratingTeamplay: string;
  skassists: string;
  skbs: string;
  skfol: string;
  skfopct: string;
  skfow: string;
  skgiveaways: string;
  skgoals: string;
  skgwg: string;
  skhits: string;
  skOverallMmr: string;
  skpim: string;
  skplusmin: string;
  skppg: string;
  skshg: string;
  skshotpct: string;
  skshots: string;
  sktakeaways: string;
  teamSide: string;
  toi: string;
  toiseconds: string;
}
