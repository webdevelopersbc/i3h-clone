import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IMatchClubInfo } from 'src/nhlapi/dtos/ match-club-info.dto';
import { IMatchAggregate } from 'src/nhlapi/dtos/match-aggregate.dto';
import { IMatchPlayer } from 'src/nhlapi/dtos/match-player.dto';
import { IMatchTimeAgo } from '../../nhlapi/dtos/match-time-ago.dto';

@Schema()
export class ClubMatch extends Document {
  @Prop({ required: true, createIndex: true })
  clubId: number;

  @Prop({ required: true, createIndex: true, dropDupes: true })
  matchId: string;

  @Prop()
  timestamp: number;

  @Prop(
    raw({
      number: { type: Number },
      unit: { type: String },
    }),
  )
  timeAgo: Record<string, IMatchTimeAgo>;

  @Prop(
    raw({
      type: Map,
      of: Map,
    }),
  )
  clubs: Record<string, IMatchClubInfo>;

  @Prop(
    raw({
      type: Map,
      of: Map,
    }),
  )
  players: Record<string, IMatchPlayer>;

  @Prop(
    raw({
      type: Map,
      of: Map,
    }),
  )
  aggregate: Record<string, IMatchAggregate>;
}

export const ClubMatchSchema = SchemaFactory.createForClass(ClubMatch);
