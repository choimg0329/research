import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    // Prisma 쿼리 로깅 (로컬 환경에서만)
    if (process.env.NODE_ENV === 'local') {
      // 타입 안전성을 위해 함수로 분리
      const setupQueryLogging = () => {
        (this as any).$on('query', (event: any) => {
          try {
            console.log('Prisma Query Event:', event);
            
            // 쿼리 포맷팅
            let query = `${event.query?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim() || ''};`;

            // 파라미터 처리
            if (event.params) {
              const params = event.params
                .replace(/"/g, "'")
                .replace(/\[|\]/g, '')
                .split(',')
                .map((param: string) => param.trim());

              // 파라미터 치환
              for (let i = 0; i < params.length; i += 1) {
                query = query.replace(new RegExp(`\\$${i + 1}`, 'g'), params[i]);
              }
              console.log('Formatted Query:', query);
            }
          } catch (error) {
            this.logger.error('Error processing query event:', error);
          }
        });
      };

      setupQueryLogging();
    }

    // 기본 로깅
    const setupBasicLogging = () => {
      (this as any).$on('query', (event: any) => {
        this.logger.log(`Query executed: ${event.query} (${event.duration}ms)`);
      });
    };

    setupBasicLogging();

    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
} 