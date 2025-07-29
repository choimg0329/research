import 'reflect-metadata';
import * as dotenv from 'dotenv';

// 환경변수 로드 - 가장 먼저 실행
const envFile = process.env.NODE_ENV === 'dev' ? 'config/.dev.env' :
                process.env.NODE_ENV === 'prod' ? 'config/.prod.env' :
                process.env.NODE_ENV === 'local' ? 'config/.local.env' :
                process.env.NODE_ENV === 'ss' ? 'config/.ss.env' : '.env';

dotenv.config({ path: envFile });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
