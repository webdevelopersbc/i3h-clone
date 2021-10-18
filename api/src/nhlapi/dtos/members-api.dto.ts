import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';

export interface IMembersPositionCount {
  forwards: number;
  goalie: number;
  defenseMen: number;
}

export class MembersPositionCountApiDto {
  @IsNumber()
  forwards: number;

  @IsNumber()
  goalie: number;

  @IsNumber()
  defenseMen: number;
}

export class MembersPlayerApiDto {
  @IsString()
  wins: string;
  @IsString()
  losses: string;
  @IsString()
  otl: string;
  @IsString()
  winnerByDnf: string;
  @IsString()
  skwins: string;
  @IsString()
  sklosses: string;
  @IsString()
  skotl: string;
  @IsString()
  skwinnerByDnf: string;
  @IsString()
  skgoals: string;
  @IsString()
  skassists: string;
  @IsString()
  skpoints: string;
  @IsString()
  skgwg: string;
  @IsString()
  skplusmin: string;
  @IsString()
  sktoi: string;
  @IsString()
  skpim: string;
  @IsString()
  skppg: string;
  @IsString()
  skshg: string;
  @IsString()
  skoffsides: string;
  @IsString()
  skfights: string;
  @IsString()
  skfightswon: string;
  @IsString()
  skfo: string;
  @IsString()
  skfow: string;
  @IsString()
  skfol: string;
  @IsString()
  skfop: string;
  @IsString()
  skhits: string;
  @IsString()
  skbs: string;
  @IsString()
  skshots: string;
  skshotpct: string;
  @IsString()
  skshotspg: string;
  @IsString()
  skdekes: string;
  @IsString()
  skdekesmade: string;
  @IsString()
  skgiveaways: string;
  @IsString()
  sktakeaways: string;
  @IsString()
  skscrnchances: string;
  @IsString()
  skscrngoals: string;
  @IsString()
  skbreakaways: string;
  @IsString()
  skgc: string;
  @IsString()
  skgcFC: string;
  @IsString()
  skhattricks: string;
  @IsString()
  skprevgoals: string;
  @IsString()
  skprevassists: string;
  @IsString()
  glwins: string;
  @IsString()
  gllosses: string;
  @IsString()
  glotl: string;
  @IsString()
  glwinnerByDnf: string;
  @IsString()
  glshots: string;
  @IsString()
  glsaves: string;
  @IsString()
  glsavepct: string;
  @IsString()
  gltoi: string;
  @IsString()
  glga: string;
  @IsString()
  glgaa: string;
  @IsString()
  glso: string;
  @IsString()
  glsoperiods: string;
  @IsString()
  gldsaves: string;
  @IsString()
  glbrkshots: string;
  @IsString()
  glbrksaves: string;
  @IsString()
  glbrksavepct: string;
  @IsString()
  glpenshots: string;
  @IsString()
  glpensaves: string;
  @IsString()
  glpensavepct: string;
  @IsString()
  glsoshots: string;
  @IsString()
  glsosaves: string;
  @IsString()
  glsosavepct: string;
  @IsString()
  glrecord: string;
  @IsString()
  glpokechecks: string;
  @IsString()
  glgc: string;
  @IsString()
  glgcFC: string;
  @IsString()
  glprevwins: string;
  @IsString()
  glprevso: string;
  @IsString()
  glgp: string;
  @IsString()
  lwgp: string;
  @IsString()
  rwgp: string;
  @IsString()
  cgp: string;
  @IsString()
  dgp: string;
  @IsString()
  skgp: string;
  @IsString()
  gamesplayed: string;
  @IsString()
  gamesCompleted: string;
  @IsString()
  gamesCompletedFC: string;
  @IsString()
  lwQuitDisc: string;
  @IsString()
  rwQuitDisc: string;
  @IsString()
  cQuitDisc: string;
  @IsString()
  dQuitDisc: string;
  @IsString()
  glQuitDisc: string;
  @IsString()
  skDNF: string;
  @IsString()
  lwDNF: string;
  @IsString()
  rwDNF: string;
  @IsString()
  cDNF: string;
  @IsString()
  dDNF: string;
  @IsString()
  glDNF: string;
  @IsString()
  glDNFmm: string;
  @IsString()
  playerQuitDisc: string;
  @IsString()
  playerDNF: string;
  @IsString()
  glggppct: string;
  @IsString()
  glgaapct: string;
  @IsString()
  glgpmin: string;
  @IsString()
  skpointspg: string;
  @IsString()
  skpointspgpct: string;
  @IsString()
  skhitspgpct: string;
  @IsString()
  skplusminpgpct: string;
  @IsString()
  skbspgpct: string;
  @IsString()
  sktakeawaypg: string;
  @IsString()
  sktkgvpct: string;
  @IsString()
  skshotpgpct: string;
  @IsString()
  skfopgpct: string;
  @IsString()
  skpointspct: string;
  @IsString()
  favoritePosition: string;
  @IsString()
  goals: string;
  @IsString()
  assists: string;
  @IsString()
  points: string;
  @IsString()
  gwg: string;
  @IsString()
  plusmin: string;
  @IsString()
  toi: string;
  @IsString()
  pim: string;
  @IsString()
  ppg: string;
  @IsString()
  shg: string;
  @IsString()
  offsides: string;
  @IsString()
  fights: string;
  @IsString()
  fightswon: string;
  @IsString()
  fo: string;
  @IsString()
  fow: string;
  @IsString()
  fol: string;
  @IsString()
  fop: string;
  @IsString()
  hits: string;
  @IsString()
  bs: string;
  @IsString()
  shots: string;
  @IsString()
  shotpct: string;
  @IsString()
  shotspg: string;
  @IsString()
  dekes: string;
  @IsString()
  dekesmade: string;
  @IsString()
  giveaways: string;
  @IsString()
  takeaways: string;
  @IsString()
  scrnchances: string;
  @IsString()
  scrngoals: string;
  @IsString()
  breakaways: string;
  @IsString()
  gc: string;
  @IsString()
  gcFC: string;
  @IsString()
  hattricks: string;
  @IsString()
  prevgoals: string;
  @IsString()
  prevassists: string;
  @IsString()
  gp: string;
  @IsString()
  DNF: string;
  @IsString()
  pointspg: string;
  @IsString()
  pointspgpct: string;
  @IsString()
  hitspgpct: string;
  @IsString()
  plusminpgpct: string;
  @IsString()
  bspgpct: string;
  @IsString()
  takeawaypg: string;
  @IsString()
  tkgvpct: string;
  @IsString()
  shotpgpct: string;
  @IsString()
  fopgpct: string;
  @IsString()
  pointspct: string;
  @IsString()
  name: string;
}

export class ClubMembersApiDto {
  @ValidateNested({ each: true })
  @Type(() => MembersPlayerApiDto)
  members: MembersPlayerApiDto[];

  @ValidateNested()
  @Type(() => MembersPositionCountApiDto)
  positionCount: MembersPositionCountApiDto;
}
