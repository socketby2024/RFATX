import { Module } from '@nestjs/common';
import { LogsModule } from './tracking/log.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/tracking'),

    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    LogsModule,
  ],
  providers: [],
})
export class AppModule {}
