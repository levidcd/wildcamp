import { Controller, Get, Post, Req, Param } from '@nestjs/common';
import { Request } from 'express';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,

  ApiTags,
} from '@nestjs/swagger';
import { SettingsService } from './settings.service';
import { Setting } from './schemas/setting.schema';

// @ApiBearerAuth()
@ApiTags('settings')
@Controller('settings')
export class SettingsController {
  constructor(private settingsService: SettingsService) {}

  @Post('/create')
  @ApiOperation({ summary: 'create' })
  async findAll(@Req() request: Request) {
    return await this.settingsService.create({ name: '', breed: '', age: 1 });
  }

  @Get('/findAll')
  @ApiOperation({ summary: 'findAll' })
  async findCat(@Req() request: Request) {
    return await this.settingsService.findAll();
  }
}
