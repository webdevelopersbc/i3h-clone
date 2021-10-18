import { IsString } from 'class-validator';

export class CustomKitDto {
  @IsString()
  isCustomTeam: string;

  @IsString()
  crestAssetId: string;

  @IsString()
  useBaseAsset: string;
}
