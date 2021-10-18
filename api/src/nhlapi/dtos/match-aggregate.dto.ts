import { IsNumber } from 'class-validator';

export class MatchAggregateDto {
  @IsNumber({}, { each: true })
  aggregate: { [key: string]: number };
}

export interface IMatchAggregate {
  [key: string]: number;
}
