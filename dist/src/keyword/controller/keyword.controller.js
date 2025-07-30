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
exports.KeywordController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const keyword_service_1 = require("../service/keyword.service");
const create_keyword_dto_1 = require("../dto/create-keyword.dto");
const update_keyword_dto_1 = require("../dto/update-keyword.dto");
let KeywordController = class KeywordController {
    keywordService;
    constructor(keywordService) {
        this.keywordService = keywordService;
    }
    create(createKeywordDto) {
        return this.keywordService.create(createKeywordDto);
    }
    findAll() {
        return this.keywordService.findAll();
    }
    findOne(keyword_id) {
        return this.keywordService.findOne(parseInt(keyword_id));
    }
    update(keyword_id, updateKeywordDto) {
        return this.keywordService.update(parseInt(keyword_id), updateKeywordDto);
    }
    remove(keyword_id) {
        return this.keywordService.remove(parseInt(keyword_id));
    }
};
exports.KeywordController = KeywordController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new keyword' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Keyword created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_keyword_dto_1.CreateKeywordDto]),
    __metadata("design:returntype", void 0)
], KeywordController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all keywords' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all keywords' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KeywordController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':keyword_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a keyword by ID' }),
    (0, swagger_1.ApiParam)({ name: 'keyword_id', description: 'Keyword ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the keyword' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Keyword not found' }),
    __param(0, (0, common_1.Param)('keyword_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KeywordController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':keyword_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a keyword' }),
    (0, swagger_1.ApiParam)({ name: 'keyword_id', description: 'Keyword ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Keyword updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Keyword not found' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Param)('keyword_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_keyword_dto_1.UpdateKeywordDto]),
    __metadata("design:returntype", void 0)
], KeywordController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':keyword_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a keyword' }),
    (0, swagger_1.ApiParam)({ name: 'keyword_id', description: 'Keyword ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Keyword deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Keyword not found' }),
    __param(0, (0, common_1.Param)('keyword_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KeywordController.prototype, "remove", null);
exports.KeywordController = KeywordController = __decorate([
    (0, swagger_1.ApiTags)('keywords'),
    (0, common_1.Controller)('research/keywords'),
    __metadata("design:paramtypes", [keyword_service_1.KeywordService])
], KeywordController);
//# sourceMappingURL=keyword.controller.js.map