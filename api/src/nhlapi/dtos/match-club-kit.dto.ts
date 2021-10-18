import { IsString } from 'class-validator';

export class MatchClubCustomKitApiDto {
  @IsString()
  isCustomTeam: string;

  @IsString()
  crestAssetId: string;

  @IsString()
  useBaseAsset: string;
}

export interface IMatchClubCustomKit {
  isCustomTeam: string;
  crestAssetId: string;
  useBaseAsset: string;
}
