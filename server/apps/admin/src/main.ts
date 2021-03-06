import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const apiPrefix = configService.get<string>('environment.static_api_prefix');
  const prefix = "admin"
  const versions = 'v1';
  const globalPrefix = `${apiPrefix}/${prefix}/${versions}`;
  const swaggerPrefix = `${globalPrefix}`;
  
  app.setGlobalPrefix(globalPrefix);

  const options = new DocumentBuilder()
    .setTitle('Admin example')
    .setDescription('The Admin API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(swaggerPrefix, app, document);


  await app.listen(3001, configService.get<string>('environment.host'));

  const url = await app.getUrl();
  console.log(`\nApplication is running on: ${url}`);
  console.log(`\nswagger page is running on: ${url}/${swaggerPrefix}`);
}
bootstrap();
