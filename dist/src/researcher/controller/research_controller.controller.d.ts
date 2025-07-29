import { ResearchServiceService } from '../service/research_service.service';
import { CreateResearcherDto } from '../dto/create-researcher.dto';
export declare class ResearchControllerController {
    private readonly researchService;
    constructor(researchService: ResearchServiceService);
    create(createResearcherDto: CreateResearcherDto): Promise<{
        code: number;
        message: string;
        data: any;
    }>;
}
