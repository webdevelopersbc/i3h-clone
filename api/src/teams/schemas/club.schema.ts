import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ICustomKit } from './custom-kit.interface';

@Schema()
export class Club extends Document {
  @Prop({ required: true, createIndex: true, dropDupes: true })
  clubId: number;

  @Prop({ required: true })
  platform: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  regionId: number;

  @Prop({ required: true })
  teamId: number;

  @Prop(
    raw({
      isCustomTeam: { type: String },
      crestAssetId: { type: String },
      useBaseAsset: { type: String },
    }),
  )
  customKit: ICustomKit;
}

export const ClubSchema = SchemaFactory.createForClass(Club);
