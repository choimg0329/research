import 'reflect-metadata';
import * as dotenv from 'dotenv';

// 환경변수 로드 - 가장 먼저 실행
const envFile = process.env.NODE_ENV === 'dev' ? 'config/.dev.env' :
                process.env.NODE_ENV === 'prod' ? 'config/.prod.env' :
                process.env.NODE_ENV === 'local' ? 'config/.local.env' :
                process.env.NODE_ENV === 'ss' ? 'config/.ss.env' : '.env';

dotenv.config({ path: envFile });

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('Research API')
    .setDescription('Research management system API documentation')
    .setVersion('1.0')
    .addTag('research')
    .addTag('patents')
    .addTag('publications')
    .addTag('journals')
    .addTag('keywords')
    .addTag('ipc')
    .addTag('domains')
    .addTag('researchers')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
