import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from './log.schema';

@Injectable()
export class LogsService {
  constructor(@InjectModel(Log.name) private logModel: Model<Log>) {}

  // 로그 생성
  async createLog(logData: Log): Promise<Log> {
    const newLog = new this.logModel(logData);
    return newLog.save();
  }

  // 모든 로그 조회
  async getAllLogs(): Promise<Log[]> {
    return this.logModel.find().exec();
  }
}