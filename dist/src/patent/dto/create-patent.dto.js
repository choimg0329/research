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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePatentDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePatentDto {
    title;
    application_number;
    registration_number;
    publication_number;
    country;
    applicant_name;
    application_title;
    applicant;
    application_date;
    registration_date;
    publication_date;
    summary;
    cno;
    user_no;
}
exports.CreatePatentDto = CreatePatentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Patent title', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePatentDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Application number', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePatentDto.prototype, "application_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Registration number', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePatentDto.prototype, "registration_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Publication number', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePatentDto.prototype, "publication_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePatentDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Applicant name', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePatentDto.prototype, "applicant_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Application title', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePatentDto.prototype, "application_title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Applicant', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePatentDto.prototype, "applicant", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Application date', required: false }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreatePatentDto.prototype, "application_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Registration date', required: false }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreatePatentDto.prototype, "registration_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Publication date', required: false }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreatePatentDto.prototype, "publication_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Summary', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePatentDto.prototype, "summary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Company number', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreatePatentDto.prototype, "cno", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User number', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreatePatentDto.prototype, "user_no", void 0);
//# sourceMappingURL=create-patent.dto.js.map