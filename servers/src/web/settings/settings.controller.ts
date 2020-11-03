import { Controller, Get, Req, Param } from '@nestjs/common';
import { Request } from 'express';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger';

// @ApiBearerAuth()
@ApiTags('settings')
@Controller('settings')
export class SettingsController {
  @Get()
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  index(): string {
    return 'Admin page';
  }


  // @Get()
  // @ApiResponse({ status: 403, description: 'Forbidden.' })
  // findAll(@Req() request: Request): string {
  //   return '1';
  // }
}
