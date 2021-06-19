import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  const options = new DocumentBuilder().setTitle('全站之巅-后台管理API').setDescription('供后台管理界面调用的服务端').setVersion('1.0').build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api-docs', app, document)
  await app.listen(3000);
  console.log('服务启动成功，请访问localhost:3000/api-docs');
}
bootstrap();
