import { IsEnum, IsString } from 'class-validator';

export type ApiPlatform = 'xboxone' | 'ps4';

export const ApiPlatforms: ApiPlatform[] = ['xboxone', 'ps4'];

export class SearchApiDTO {
  @IsEnum(ApiPlatforms)
  platform: ApiPlatform;

  @IsString()
  search: string;
}
