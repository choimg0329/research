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
exports.KeywordService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let KeywordService = class KeywordService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createKeywordDto) {
        const data = {
            ...createKeywordDto,
            cno: createKeywordDto.cno ? BigInt(createKeywordDto.cno) : null,
            user_no: createKeywordDto.user_no ? BigInt(createKeywordDto.user_no) : null,
        };
        return this.prisma.keyword.create({
            data,
        });
    }
    async findAll() {
        return this.prisma.keyword.findMany();
    }
    async findOne(id) {
        return this.prisma.keyword.findUnique({
            where: { keyword_id: BigInt(id) },
        });
    }
    async update(id, updateKeywordDto) {
        const data = {
            ...updateKeywordDto,
            cno: updateKeywordDto.cno ? BigInt(updateKeywordDto.cno) : undefined,
            user_no: updateKeywordDto.user_no ? BigInt(updateKeywordDto.user_no) : undefined,
        };
        return this.prisma.keyword.update({
            where: { keyword_id: BigInt(id) },
            data,
        });
    }
    async remove(id) {
        return this.prisma.keyword.delete({
            where: { keyword_id: BigInt(id) },
        });
    }
};
exports.KeywordService = KeywordService;
exports.KeywordService = KeywordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], KeywordService);
//# sourceMappingURL=keyword.service.js.map