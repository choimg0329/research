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
exports.PublicationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let PublicationService = class PublicationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPublicationDto) {
        const data = {
            ...createPublicationDto,
            journal_id: createPublicationDto.journal_id ? BigInt(createPublicationDto.journal_id) : null,
            cno: createPublicationDto.cno ? BigInt(createPublicationDto.cno) : null,
            user_no: createPublicationDto.user_no ? BigInt(createPublicationDto.user_no) : null,
        };
        return this.prisma.publication.create({
            data,
        });
    }
    async findAll() {
        return this.prisma.publication.findMany();
    }
    async findOne(id) {
        return this.prisma.publication.findUnique({
            where: { publication_id: BigInt(id) },
        });
    }
    async update(id, updatePublicationDto) {
        const data = {
            ...updatePublicationDto,
            journal_id: updatePublicationDto.journal_id ? BigInt(updatePublicationDto.journal_id) : undefined,
            cno: updatePublicationDto.cno ? BigInt(updatePublicationDto.cno) : undefined,
            user_no: updatePublicationDto.user_no ? BigInt(updatePublicationDto.user_no) : undefined,
        };
        return this.prisma.publication.update({
            where: { publication_id: BigInt(id) },
            data,
        });
    }
    async remove(id) {
        return this.prisma.publication.delete({
            where: { publication_id: BigInt(id) },
        });
    }
};
exports.PublicationService = PublicationService;
exports.PublicationService = PublicationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PublicationService);
//# sourceMappingURL=publication.service.js.map