"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ResearchServiceService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResearchServiceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const util_1 = require("../../common/util");
let ResearchServiceService = ResearchServiceService_1 = class ResearchServiceService {
    prisma;
    logger = new common_1.Logger(ResearchServiceService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createResearcherDto) {
        const data = {
            ...createResearcherDto,
            cno: createResearcherDto.cno ? BigInt(createResearcherDto.cno) : null,
            user_no: createResearcherDto.user_no ? BigInt(createResearcherDto.user_no) : null,
        };
        const existing = await this.prisma.researcher.findFirst({
            where: { user_no: data.user_no },
        });
        if (existing) {
            this.logger.warn(`Duplicate user_no detected: ${createResearcherDto.user_no}`);
            return {
                code: 200,
                message: '이미 등록된 사용자입니다.',
                data: (0, util_1.bigIntToString)(existing),
            };
        }
        const result = await this.prisma.researcher.create({ data });
        this.logger.log(`Researcher created: user_no=${createResearcherDto.user_no}, id=${result.researcher_id}`);
        return {
            code: 201,
            message: '연구자 등록 완료',
            data: (0, util_1.bigIntToString)(result),
        };
    }
};
exports.ResearchServiceService = ResearchServiceService;
exports.ResearchServiceService = ResearchServiceService = ResearchServiceService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ResearchServiceService);
//# sourceMappingURL=research_service.service.js.map