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
exports.JournalService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let JournalService = class JournalService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createJournalDto) {
        const data = {
            ...createJournalDto,
            impact_factor: createJournalDto.impact_factor ? createJournalDto.impact_factor : null,
            cno: createJournalDto.cno ? BigInt(createJournalDto.cno) : null,
            user_no: createJournalDto.user_no ? BigInt(createJournalDto.user_no) : null,
        };
        return this.prisma.journal.create({
            data,
        });
    }
    async findAll() {
        return this.prisma.journal.findMany();
    }
    async findOne(id) {
        return this.prisma.journal.findUnique({
            where: { journal_id: BigInt(id) },
        });
    }
    async update(id, updateJournalDto) {
        const data = {
            ...updateJournalDto,
            impact_factor: updateJournalDto.impact_factor ? updateJournalDto.impact_factor : undefined,
            cno: updateJournalDto.cno ? BigInt(updateJournalDto.cno) : undefined,
            user_no: updateJournalDto.user_no ? BigInt(updateJournalDto.user_no) : undefined,
        };
        return this.prisma.journal.update({
            where: { journal_id: BigInt(id) },
            data,
        });
    }
    async remove(id) {
        return this.prisma.journal.delete({
            where: { journal_id: BigInt(id) },
        });
    }
};
exports.JournalService = JournalService;
exports.JournalService = JournalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], JournalService);
//# sourceMappingURL=journal.service.js.map