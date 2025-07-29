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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let PatentService = class PatentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPatentDto) {
        const data = {
            ...createPatentDto,
            cno: createPatentDto.cno ? BigInt(createPatentDto.cno) : null,
            user_no: createPatentDto.user_no ? BigInt(createPatentDto.user_no) : null,
        };
        return this.prisma.patent.create({
            data,
        });
    }
    async findAll() {
        return this.prisma.patent.findMany();
    }
    async findOne(id) {
        return this.prisma.patent.findUnique({
            where: { patent_id: BigInt(id) },
        });
    }
    async update(id, updatePatentDto) {
        const data = {
            ...updatePatentDto,
            cno: updatePatentDto.cno ? BigInt(updatePatentDto.cno) : undefined,
            user_no: updatePatentDto.user_no ? BigInt(updatePatentDto.user_no) : undefined,
        };
        return this.prisma.patent.update({
            where: { patent_id: BigInt(id) },
            data,
        });
    }
    async remove(id) {
        return this.prisma.patent.delete({
            where: { patent_id: BigInt(id) },
        });
    }
};
exports.PatentService = PatentService;
exports.PatentService = PatentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PatentService);
//# sourceMappingURL=patent.service.js.map