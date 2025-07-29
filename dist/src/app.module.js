"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./common/app.controller");
const app_service_1 = require("./common/app.service");
const research_service_module_1 = require("./researcher/module/research_service.module");
const patent_module_1 = require("./patent/module/patent.module");
const publication_module_1 = require("./publication/module/publication.module");
const journal_module_1 = require("./journal/module/journal.module");
const keyword_module_1 = require("./keyword/module/keyword.module");
const ipc_module_1 = require("./ipc/module/ipc.module");
const domain_module_1 = require("./domain/module/domain.module");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `${__dirname}/../config/.${process.env.NODE_ENV || 'local'}.env`,
            }),
            research_service_module_1.ResearchServiceModule,
            patent_module_1.PatentModule,
            publication_module_1.PublicationModule,
            journal_module_1.JournalModule,
            keyword_module_1.KeywordModule,
            ipc_module_1.IpcModule,
            domain_module_1.DomainModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map