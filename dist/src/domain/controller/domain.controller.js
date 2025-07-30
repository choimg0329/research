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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const domain_service_1 = require("../service/domain.service");
const create_domain_dto_1 = require("../dto/create-domain.dto");
const update_domain_dto_1 = require("../dto/update-domain.dto");
let DomainController = class DomainController {
    domainService;
    constructor(domainService) {
        this.domainService = domainService;
    }
    create(createDomainDto) {
        return this.domainService.create(createDomainDto);
    }
    findAll() {
        return this.domainService.findAll();
    }
    findOne(domain_id) {
        return this.domainService.findOne(parseInt(domain_id));
    }
    update(domain_id, updateDomainDto) {
        return this.domainService.update(parseInt(domain_id), updateDomainDto);
    }
    remove(domain_id) {
        return this.domainService.remove(parseInt(domain_id));
    }
};
exports.DomainController = DomainController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new domain' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Domain created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_domain_dto_1.CreateDomainDto]),
    __metadata("design:returntype", void 0)
], DomainController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all domains' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all domains' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DomainController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':domain_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a domain by ID' }),
    (0, swagger_1.ApiParam)({ name: 'domain_id', description: 'Domain ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the domain' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Domain not found' }),
    __param(0, (0, common_1.Param)('domain_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DomainController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':domain_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a domain' }),
    (0, swagger_1.ApiParam)({ name: 'domain_id', description: 'Domain ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Domain updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Domain not found' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Param)('domain_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_domain_dto_1.UpdateDomainDto]),
    __metadata("design:returntype", void 0)
], DomainController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':domain_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a domain' }),
    (0, swagger_1.ApiParam)({ name: 'domain_id', description: 'Domain ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Domain deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Domain not found' }),
    __param(0, (0, common_1.Param)('domain_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DomainController.prototype, "remove", null);
exports.DomainController = DomainController = __decorate([
    (0, swagger_1.ApiTags)('domains'),
    (0, common_1.Controller)('research/domains'),
    __metadata("design:paramtypes", [domain_service_1.DomainService])
], DomainController);
//# sourceMappingURL=domain.controller.js.map