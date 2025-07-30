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
exports.PublicationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const publication_service_1 = require("../service/publication.service");
const create_publication_dto_1 = require("../dto/create-publication.dto");
const update_publication_dto_1 = require("../dto/update-publication.dto");
let PublicationController = class PublicationController {
    publicationService;
    constructor(publicationService) {
        this.publicationService = publicationService;
    }
    create(createPublicationDto) {
        return this.publicationService.create(createPublicationDto);
    }
    findAll() {
        return this.publicationService.findAll();
    }
    findOne(publication_id) {
        return this.publicationService.findOne(parseInt(publication_id));
    }
    update(publication_id, updatePublicationDto) {
        return this.publicationService.update(parseInt(publication_id), updatePublicationDto);
    }
    remove(publication_id) {
        return this.publicationService.remove(parseInt(publication_id));
    }
};
exports.PublicationController = PublicationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new publication' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Publication created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_publication_dto_1.CreatePublicationDto]),
    __metadata("design:returntype", void 0)
], PublicationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all publications' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all publications' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':publication_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a publication by ID' }),
    (0, swagger_1.ApiParam)({ name: 'publication_id', description: 'Publication ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the publication' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Publication not found' }),
    __param(0, (0, common_1.Param)('publication_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublicationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':publication_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a publication' }),
    (0, swagger_1.ApiParam)({ name: 'publication_id', description: 'Publication ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Publication updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Publication not found' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Param)('publication_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_publication_dto_1.UpdatePublicationDto]),
    __metadata("design:returntype", void 0)
], PublicationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':publication_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a publication' }),
    (0, swagger_1.ApiParam)({ name: 'publication_id', description: 'Publication ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Publication deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Publication not found' }),
    __param(0, (0, common_1.Param)('publication_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublicationController.prototype, "remove", null);
exports.PublicationController = PublicationController = __decorate([
    (0, swagger_1.ApiTags)('publications'),
    (0, common_1.Controller)('research/publications'),
    __metadata("design:paramtypes", [publication_service_1.PublicationService])
], PublicationController);
//# sourceMappingURL=publication.controller.js.map