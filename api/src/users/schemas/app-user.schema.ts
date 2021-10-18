import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AppUser extends Document {
  @Prop({ required: true, createIndex: true, dropDupes: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ required: true })
  isAdmin: boolean;
}

export const AppUserSchema = SchemaFactory.createForClass(AppUser);
