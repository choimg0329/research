"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIpcDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ipc_dto_1 = require("./create-ipc.dto");
class UpdateIpcDto extends (0, mapped_types_1.PartialType)(create_ipc_dto_1.CreateIpcDto) {
}
exports.UpdateIpcDto = UpdateIpcDto;
//# sourceMappingURL=update-ipc.dto.js.map