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
exports.IpcService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let IpcService = class IpcService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createIpcDto) {
        const data = {
            ...createIpcDto,
            cno: createIpcDto.cno ? BigInt(createIpcDto.cno) : null,
            user_no: createIpcDto.user_no ? BigInt(createIpcDto.user_no) : null,
        };
        return this.prisma.ipc.create({
            data,
        });
    }
    async findAll() {
        return this.prisma.ipc.findMany();
    }
    async findOne(id) {
        return this.prisma.ipc.findUnique({
            where: { ipc_id: BigInt(id) },
        });
    }
    async update(id, updateIpcDto) {
        const data = {
            ...updateIpcDto,
            cno: updateIpcDto.cno ? BigInt(updateIpcDto.cno) : undefined,
            user_no: updateIpcDto.user_no ? BigInt(updateIpcDto.user_no) : undefined,
        };
        return this.prisma.ipc.update({
            where: { ipc_id: BigInt(id) },
            data,
        });
    }
    async remove(id) {
        return this.prisma.ipc.delete({
            where: { ipc_id: BigInt(id) },
        });
    }
};
exports.IpcService = IpcService;
exports.IpcService = IpcService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], IpcService);
//# sourceMappingURL=ipc.service.js.map