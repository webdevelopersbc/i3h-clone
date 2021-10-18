import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IMembersPositionCount } from 'src/nhlapi/dtos/members-api.dto';

@Schema()
export class ClubMembers extends Document {
  @Prop({ required: true, createIndex: true, dropDupes: true })
  clubId: number;

  @Prop()
  members: Record<string, string>[];

  @Prop(
    raw({
      forwards: { type: Number },
      goalie: { type: Number },
      defenseMen: { type: Number },
    }),
  )
  positionCount: Record<string, IMembersPositionCount>;
}

export const ClubMembersSchema = SchemaFactory.createForClass(ClubMembers);
