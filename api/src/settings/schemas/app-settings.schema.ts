import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AppSettings extends Document {
  @Prop({ required: true })
  timeOfDay: string;

  @Prop({ required: true })
  timeZone: string;
}

export const AppSettingsSchema = SchemaFactory.createForClass(AppSettings);
