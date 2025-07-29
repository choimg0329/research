"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PrismaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let PrismaService = PrismaService_1 = class PrismaService extends client_1.PrismaClient {
    logger = new common_1.Logger(PrismaService_1.name);
    async onModuleInit() {
        if (process.env.NODE_ENV === 'local') {
            const setupQueryLogging = () => {
                this.$on('query', (event) => {
                    try {
                        console.log('Prisma Query Event:', event);
                        let query = `${event.query?.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim() || ''};`;
                        if (event.params) {
                            const params = event.params
                                .replace(/"/g, "'")
                                .replace(/\[|\]/g, '')
                                .split(',')
                                .map((param) => param.trim());
                            for (let i = 0; i < params.length; i += 1) {
                                query = query.replace(new RegExp(`\\$${i + 1}`, 'g'), params[i]);
                            }
                            console.log('Formatted Query:', query);
                        }
                    }
                    catch (error) {
                        this.logger.error('Error processing query event:', error);
                    }
                });
            };
            setupQueryLogging();
        }
        const setupBasicLogging = () => {
            this.$on('query', (event) => {
                this.logger.log(`Query executed: ${event.query} (${event.duration}ms)`);
            });
        };
        setupBasicLogging();
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = PrismaService_1 = __decorate([
    (0, common_1.Injectable)()
], PrismaService);
//# sourceMappingURL=prisma.service.js.map