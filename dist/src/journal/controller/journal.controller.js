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
exports.JournalController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const journal_service_1 = require("../service/journal.service");
const create_journal_dto_1 = require("../dto/create-journal.dto");
const update_journal_dto_1 = require("../dto/update-journal.dto");
let JournalController = class JournalController {
    journalService;
    constructor(journalService) {
        this.journalService = journalService;
    }
    create(createJournalDto) {
        return this.journalService.create(createJournalDto);
    }
    findAll() {
        return this.journalService.findAll();
    }
    findOne(journal_id) {
        return this.journalService.findOne(parseInt(journal_id));
    }
    update(journal_id, updateJournalDto) {
        return this.journalService.update(parseInt(journal_id), updateJournalDto);
    }
    remove(journal_id) {
        return this.journalService.remove(parseInt(journal_id));
    }
};
exports.JournalController = JournalController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new journal' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Journal created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_journal_dto_1.CreateJournalDto]),
    __metadata("design:returntype", void 0)
], JournalController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all journals' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all journals' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JournalController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':journal_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a journal by ID' }),
    (0, swagger_1.ApiParam)({ name: 'journal_id', description: 'Journal ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the journal' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Journal not found' }),
    __param(0, (0, common_1.Param)('journal_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JournalController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':journal_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a journal' }),
    (0, swagger_1.ApiParam)({ name: 'journal_id', description: 'Journal ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Journal updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Journal not found' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Param)('journal_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_journal_dto_1.UpdateJournalDto]),
    __metadata("design:returntype", void 0)
], JournalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':journal_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a journal' }),
    (0, swagger_1.ApiParam)({ name: 'journal_id', description: 'Journal ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Journal deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Journal not found' }),
    __param(0, (0, common_1.Param)('journal_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JournalController.prototype, "remove", null);
exports.JournalController = JournalController = __decorate([
    (0, swagger_1.ApiTags)('journals'),
    (0, common_1.Controller)('research/journals'),
    __metadata("design:paramtypes", [journal_service_1.JournalService])
], JournalController);
//# sourceMappingURL=journal.controller.js.map