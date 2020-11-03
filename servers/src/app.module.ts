import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingsModule } from './web/settings/settings.module';

import { ConfigModule } from '@nestjs/config';
import configuration from './shared/config/configuration'; //导入自定义配置
import databaseconfig from './shared/config/database.config';
import * as Joi from 'joi';

console.log(configuration)

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      ignoreEnvFile: false,
      isGlobal: true,
      load: [configuration, databaseconfig],
      validationSchema: Joi.object({
        HOST: Joi.string().default('192.168.0.1'),
        ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
      }),
    }),
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
