import { Body, Controller, Get, Post } from '@nestjs/common';
import { Log } from './log.schema';
import { LogsService } from './log.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Logger')
@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @ApiOperation({ summary : '로그 생성'})
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        uuid: {
          type: 'string',
          example: '123e4567-e89b-12d3-a456-426614174000',
          description: '고유 식별자 (UUID)',
        },
        userId: {
          type: 'string',
          example: 'user123',
          description: '사용자 ID',
        },
        timestamp: {
          type: 'string',
          example: '2025-01-26T10:00:00Z',
          description: '이벤트 발생 시간 (ISO8601 형식)',
        },
        eventType: {
          type: 'string',
          example: 'screen_view',
          description: '이벤트 유형',
        },
        eventName: {
          type: 'string',
          example: 'HomeScreen',
          description: '이벤트 이름',
        },
        usingAppVersion: {
          type: 'string',
          example: '1.0.0',
          description: '사용 중인 앱 버전',
        },
        eventDetails: {
          type: 'object',
          example: { section: 'main', buttonClicked: 'buyNow' },
          description: '추가 이벤트 세부 정보 (선택)',
        },
        deviceInfo: {
          type: 'object',
          properties: {
            os: {
              type: 'string',
              example: 'iOS',
              description: '운영체제',
            },
            osVersion: {
              type: 'string',
              example: '16.3',
              description: '운영체제 버전',
            },
            deviceModel: {
              type: 'string',
              example: 'iPhone 13 Pro Max',
              description: '디바이스 모델',
            },
            brand: {
              type: 'string',
              example: 'Apple',
              description: '브랜드 (선택)',
            },
          },
          description: '디바이스 정보',
        },
        location: {
          type: 'object',
          properties: {
            country: {
              type: 'string',
              example: 'South Korea',
              description: '국가',
            },
            city: {
              type: 'string',
              example: 'Seoul',
              description: '도시 (선택)',
            },
            timeZone: {
              type: 'string',
              example: 'KST',
              description: '시간대',
            },
          },
          description: '위치 정보 (선택)',
        },
        // createdAt는 timestamps 옵션에 의해 자동 생성되므로 요청 Body에 포함하지 않아도 됩니다.
      },
    },
  })
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