import { IsNumber, IsString } from 'class-validator';

export class MatchTimeAgoApiDto {
  @IsNumber()
  number: number;

  @IsString()
  unit: string;
}

export interface IMatchTimeAgo {
  number: number;
  unit: string;
}
