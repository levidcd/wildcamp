import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

import setupApp from './core/setup/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const configService = app.get(ConfigService);
  // 初始化nest
  app.init();

  console.log(configService);
  // 建立app配置
  setupApp(app);
  // 启动服务
  await app.listen(
    configService.get<number>('environment.port'),
    configService.get<string>('environment.host'),
  );

  // await app.listen(3000);
}
bootstrap().catch(console.error);
