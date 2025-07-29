"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpcModule = void 0;
const common_1 = require("@nestjs/common");
const ipc_service_1 = require("../service/ipc.service");
const ipc_controller_1 = require("../controller/ipc.controller");
const prisma_service_1 = require("../../../prisma/prisma.service");
let IpcModule = class IpcModule {
};
exports.IpcModule = IpcModule;
exports.IpcModule = IpcModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [ipc_controller_1.IpcController],
        providers: [ipc_service_1.IpcService, prisma_service_1.PrismaService],
    })
], IpcModule);
//# sourceMappingURL=ipc.module.js.map