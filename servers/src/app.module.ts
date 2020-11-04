import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingsModule } from './web/settings/settings.module';

import { CoreModule,  } from './core';

@Module({
  imports: [SettingsModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
