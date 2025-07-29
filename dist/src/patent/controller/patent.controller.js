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
exports.PatentController = void 0;
const common_1 = require("@nestjs/common");
const patent_service_1 = require("../service/patent.service");
const create_patent_dto_1 = require("../dto/create-patent.dto");
const update_patent_dto_1 = require("../dto/update-patent.dto");
let PatentController = class PatentController {
    patentService;
    constructor(patentService) {
        this.patentService = patentService;
    }
    create(createPatentDto) {
        return this.patentService.create(createPatentDto);
    }
    findAll() {
        return this.patentService.findAll();
    }
    findOne(id) {
        return this.patentService.findOne(+id);
    }
    update(id, updatePatentDto) {
        return this.patentService.update(+id, updatePatentDto);
    }
    remove(id) {
        return this.patentService.remove(+id);
    }
};
exports.PatentController = PatentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_patent_dto_1.CreatePatentDto]),
    __metadata("design:returntype", void 0)
], PatentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PatentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_patent_dto_1.UpdatePatentDto]),
    __metadata("design:returntype", void 0)
], PatentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatentController.prototype, "remove", null);
exports.PatentController = PatentController = __decorate([
    (0, common_1.Controller)('research/patents'),
    __metadata("design:paramtypes", [patent_service_1.PatentService])
], PatentController);
//# sourceMappingURL=patent.controller.js.map