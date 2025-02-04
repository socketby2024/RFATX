import { Module } from '@nestjs/common';
import { LogsModule } from './tracking/log.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/tracking'),
    LogsModule,
  ],
})
export class AppModule {}
