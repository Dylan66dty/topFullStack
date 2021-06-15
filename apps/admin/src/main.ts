import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  await app.listen(3000);
  console.log('服务启动成功，请访问localhost:3000');
}
bootstrap();
