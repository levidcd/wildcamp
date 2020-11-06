import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

import setupApp from '@app/core/setup/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const apiPrefix = configService.get<string>('environment.static_api_prefix');
  const prefix = "web"
  const versions = 'v1';
  const globalPrefix = `${apiPrefix}/${prefix}/${versions}`;
  const swaggerPrefix = `${globalPrefix}`;

  app.setGlobalPrefix(globalPrefix);

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(swaggerPrefix, app, document);

  // 初始化nest
  app.init();

  // 建立app配置
  setupApp(app);
  // 启动服务
  await app.listen(
    configService.get<number>('environment.port'),
    configService.get<string>('environment.host'),
  );

  const url = await app.getUrl();
  console.log(`\nApplication is running on: ${url}`);
  console.log(`\nswagger page is running on: ${url}/${swaggerPrefix}`);
  // await app.listen(3000);
}
bootstrap().catch(console.error);
