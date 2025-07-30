"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv = require("dotenv");
const envFile = process.env.NODE_ENV === 'dev' ? 'config/.dev.env' :
    process.env.NODE_ENV === 'prod' ? 'config/.prod.env' :
        process.env.NODE_ENV === 'local' ? 'config/.local.env' :
            process.env.NODE_ENV === 'ss' ? 'config/.ss.env' : '.env';
dotenv.config({ path: envFile });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Research API')
        .setDescription('Research management system API documentation')
        .setVersion('1.0')
        .addTag('research')
        .addTag('patents')
        .addTag('publications')
        .addTag('journals')
        .addTag('keywords')
        .addTag('ipc')
        .addTag('domains')
        .addTag('researchers')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map