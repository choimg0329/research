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
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map