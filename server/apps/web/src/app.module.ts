import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingsModule } from './settings/settings.module';

import { CoreModule } from '@app/core';

@Module({
  imports: [CoreModule,SettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
