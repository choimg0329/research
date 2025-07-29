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
    findOne(id) {
        return this.domainService.findOne(+id);
    }
    update(id, updateDomainDto) {
        return this.domainService.update(+id, updateDomainDto);
    }
    remove(id) {
        return this.domainService.remove(+id);
    }
};
exports.DomainController = DomainController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_domain_dto_1.CreateDomainDto]),
    __metadata("design:returntype", void 0)
], DomainController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DomainController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DomainController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_domain_dto_1.UpdateDomainDto]),
    __metadata("design:returntype", void 0)
], DomainController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DomainController.prototype, "remove", null);
exports.DomainController = DomainController = __decorate([
    (0, common_1.Controller)('research/domains'),
    __metadata("design:paramtypes", [domain_service_1.DomainService])
], DomainController);
//# sourceMappingURL=domain.controller.js.map