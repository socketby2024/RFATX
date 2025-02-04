import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Log extends Document {
  @Prop({})
  uuid: string;

  @Prop({})
  userId: string;

  @Prop({ required: true })
  timestamp: string;

  @Prop({ required: true })
  eventType: string;

  @Prop({ required: true })
  eventName: string;

  @Prop({ required: true })
  usingAppVersion: string;

  @Prop({ type: Object })
  eventDetails?: Record<string, any>;

  @Prop({ type: Object, required: true })
  deviceInfo: {
    os: string;
    osVersion: string;
    deviceModel: string;
    brand?: string;
  };

  @Prop({ type: Object })
  location?: {
    country: string;
    city?: string;
    timeZone: string;
  };

  @Prop()
  createdAt?: Date;
}

export const LogSchema = SchemaFactory.createForClass(Log);