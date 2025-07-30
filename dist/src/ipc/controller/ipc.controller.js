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
exports.IpcController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ipc_service_1 = require("../service/ipc.service");
const create_ipc_dto_1 = require("../dto/create-ipc.dto");
const update_ipc_dto_1 = require("../dto/update-ipc.dto");
let IpcController = class IpcController {
    ipcService;
    constructor(ipcService) {
        this.ipcService = ipcService;
    }
    create(createIpcDto) {
        return this.ipcService.create(createIpcDto);
    }
    findAll() {
        return this.ipcService.findAll();
    }
    findOne(ipc_id) {
        return this.ipcService.findOne(parseInt(ipc_id));
    }
    update(ipc_id, updateIpcDto) {
        return this.ipcService.update(parseInt(ipc_id), updateIpcDto);
    }
    remove(ipc_id) {
        return this.ipcService.remove(parseInt(ipc_id));
    }
};
exports.IpcController = IpcController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new IPC' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'IPC created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ipc_dto_1.CreateIpcDto]),
    __metadata("design:returntype", void 0)
], IpcController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all IPCs' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all IPCs' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IpcController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':ipc_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get an IPC by ID' }),
    (0, swagger_1.ApiParam)({ name: 'ipc_id', description: 'IPC ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the IPC' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'IPC not found' }),
    __param(0, (0, common_1.Param)('ipc_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IpcController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':ipc_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an IPC' }),
    (0, swagger_1.ApiParam)({ name: 'ipc_id', description: 'IPC ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'IPC updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'IPC not found' }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })),
    __param(0, (0, common_1.Param)('ipc_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ipc_dto_1.UpdateIpcDto]),
    __metadata("design:returntype", void 0)
], IpcController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':ipc_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an IPC' }),
    (0, swagger_1.ApiParam)({ name: 'ipc_id', description: 'IPC ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'IPC deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'IPC not found' }),
    __param(0, (0, common_1.Param)('ipc_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IpcController.prototype, "remove", null);
exports.IpcController = IpcController = __decorate([
    (0, swagger_1.ApiTags)('ipc'),
    (0, common_1.Controller)('research/ipc'),
    __metadata("design:paramtypes", [ipc_service_1.IpcService])
], IpcController);
//# sourceMappingURL=ipc.controller.js.map