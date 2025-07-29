import { PrismaService } from '../../../prisma/prisma.service';
import { CreateResearcherDto } from '../dto/create-researcher.dto';
export declare class ResearchServiceService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    create(createResearcherDto: CreateResearcherDto): Promise<{
        code: number;
        message: string;
        data: any;
    }>;
}
