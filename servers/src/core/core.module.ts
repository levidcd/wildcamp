import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import validationSchema from './config/env-schema';
import loadConfig from './config/load-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: `${process.env.NODE_ENV || 'development'}.env`,
      load: loadConfig,
      validationSchema,
    }),
  ],
})
export class CoreModule {}
