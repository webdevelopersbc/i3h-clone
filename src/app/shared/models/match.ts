export interface Match {
  timeAgo: TimeAgo;
  _id: string;
  matchId: string;
  timestamp: number;
  clubs: { [key: string]: MatchClub };
  players: { [key: string]: { [key: string]: { [key: string]: string } } };
  aggregate: { [key: string]: { [key: string]: number } };
  clubId: number;
  __v: number;
}

export interface MatchClub {
  cNhlOnlineGameType: string;
  losses: string;
  memberString: MemberString;
  ppg: string;
  ppo: string;
  result: string;
  score: string;
  scoreString: string;
  teamSide: string;
  toa: string;
  winnerByDnf: string;
  winnerByGoalieDnf: string;
  details: MatchClubDetails | null;
  goals: string;
  goalsAgainst: string;
}

export interface MatchClubDetails {
  name: string;
  clubId: number;
  regionId: number;
  teamId: number;
  customKit: MatchClubDetailsCustomKit;
}

export interface MatchClubDetailsCustomKit {
  isCustomTeam: string;
  crestAssetId: string;
  useBaseAsset: string;
}

export enum MemberString {
  The44 = '4 / 4',
  The66 = '6 / 6',
}

export interface TimeAgo {
  number: number;
  unit: Unit;
}

export enum Unit {
  Minutes = 'minutes',
  Hours = 'hours',
  Days = 'days',
  Months = 'months',
  Years = 'years',
}
