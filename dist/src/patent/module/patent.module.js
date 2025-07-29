"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatentModule = void 0;
const common_1 = require("@nestjs/common");
const patent_service_1 = require("../service/patent.service");
const patent_controller_1 = require("../controller/patent.controller");
const prisma_service_1 = require("../../../prisma/prisma.service");
let PatentModule = class PatentModule {
};
exports.PatentModule = PatentModule;
exports.PatentModule = PatentModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [patent_controller_1.PatentController],
        providers: [patent_service_1.PatentService, prisma_service_1.PrismaService],
    })
], PatentModule);
//# sourceMappingURL=patent.module.js.map