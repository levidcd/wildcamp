import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}
  
  getDataHost(): string {
    const DataHost: string = this.configService.get<string>('database.host');
    return DataHost;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
