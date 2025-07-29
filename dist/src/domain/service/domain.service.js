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
exports.DomainService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let DomainService = class DomainService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDomainDto) {
        const data = {
            ...createDomainDto,
            cno: createDomainDto.cno ? BigInt(createDomainDto.cno) : null,
            user_no: createDomainDto.user_no ? BigInt(createDomainDto.user_no) : null,
        };
        return this.prisma.domain.create({
            data,
        });
    }
    async findAll() {
        return this.prisma.domain.findMany();
    }
    async findOne(id) {
        return this.prisma.domain.findUnique({
            where: { domain_id: BigInt(id) },
        });
    }
    async update(id, updateDomainDto) {
        const data = {
            ...updateDomainDto,
            cno: updateDomainDto.cno ? BigInt(updateDomainDto.cno) : undefined,
            user_no: updateDomainDto.user_no ? BigInt(updateDomainDto.user_no) : undefined,
        };
        return this.prisma.domain.update({
            where: { domain_id: BigInt(id) },
            data,
        });
    }
    async remove(id) {
        return this.prisma.domain.delete({
            where: { domain_id: BigInt(id) },
        });
    }
};
exports.DomainService = DomainService;
exports.DomainService = DomainService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DomainService);
//# sourceMappingURL=domain.service.js.map