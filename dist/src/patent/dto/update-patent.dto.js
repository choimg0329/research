"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePatentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_patent_dto_1 = require("./create-patent.dto");
class UpdatePatentDto extends (0, mapped_types_1.PartialType)(create_patent_dto_1.CreatePatentDto) {
}
exports.UpdatePatentDto = UpdatePatentDto;
//# sourceMappingURL=update-patent.dto.js.map