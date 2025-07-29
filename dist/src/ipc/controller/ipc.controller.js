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
    findOne(id) {
        return this.ipcService.findOne(+id);
    }
    update(id, updateIpcDto) {
        return this.ipcService.update(+id, updateIpcDto);
    }
    remove(id) {
        return this.ipcService.remove(+id);
    }
};
exports.IpcController = IpcController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ipc_dto_1.CreateIpcDto]),
    __metadata("design:returntype", void 0)
], IpcController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IpcController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IpcController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ipc_dto_1.UpdateIpcDto]),
    __metadata("design:returntype", void 0)
], IpcController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IpcController.prototype, "remove", null);
exports.IpcController = IpcController = __decorate([
    (0, common_1.Controller)('research/ipc'),
    __metadata("design:paramtypes", [ipc_service_1.IpcService])
], IpcController);
//# sourceMappingURL=ipc.controller.js.map