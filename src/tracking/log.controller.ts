import { Body, Controller, Get, Post } from '@nestjs/common';
import { Log } from './log.schema';
import { LogsService } from './log.service';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  // 로그 저장
  @Post()
  async createLog(@Body() logData: Log): Promise<Log> {
    return this.logsService.createLog(logData);
  }

  // 모든 로그 조회
  @Get()
  async getAllLogs(): Promise<Log[]> {
    return this.logsService.getAllLogs();
  }
}