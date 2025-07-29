import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateResearcherDto } from '../dto/create-researcher.dto';
import { bigIntToString} from '../../common/util';

@Injectable()
export class ResearchServiceService {
  private readonly logger = new Logger(ResearchServiceService.name);
  constructor(private readonly prisma: PrismaService) {}

  async create(createResearcherDto: CreateResearcherDto) {
    const data = {
      ...createResearcherDto,
      cno: createResearcherDto.cno ? BigInt(createResearcherDto.cno) : null,
      user_no: createResearcherDto.user_no ? BigInt(createResearcherDto.user_no) : null,
    };

    // 1. user_no로 기존 researcher 조회
    const existing = await this.prisma.researcher.findFirst({
      where: { user_no: data.user_no },
    });

    if (existing) {
      this.logger.warn(`Duplicate user_no detected: ${createResearcherDto.user_no}`);
      // 이미 등록된 사용자
      return {
        code: 200, // 또는 409
        message: '이미 등록된 사용자입니다.',
        data: bigIntToString(existing),
      };
    }

    // 신규 등록
    const result = await this.prisma.researcher.create({ data });
    this.logger.log(`Researcher created: user_no=${createResearcherDto.user_no}, id=${result.researcher_id}`);
    return {
      code: 201,
      message: '연구자 등록 완료',
      data: bigIntToString(result),
    };
  }
}
