import { Module } from '@nestjs/common';
import { AppController } from './common/app.controller';
import { AppService } from './common/app.service';
import { ResearchServiceModule } from './researcher/module/research_service.module';
import { PatentModule } from './patent/module/patent.module';
import { PublicationModule } from './publication/module/publication.module';
import { JournalModule } from './journal/module/journal.module';
import { KeywordModule } from './keyword/module/keyword.module';
import { IpcModule } from './ipc/module/ipc.module';
import { DomainModule } from './domain/module/domain.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${__dirname}/../config/.${process.env.NODE_ENV || 'local'}.env`,
    }),
    ResearchServiceModule,
    PatentModule,
    PublicationModule,
    JournalModule,
    KeywordModule,
    IpcModule,
    DomainModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
