import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Setting, SettingDocument } from './schemas/setting.schema';
import { CreateSettingDto } from './dto/create-setting.dto';


@Injectable()
export class SettingsService {
  constructor(@InjectModel(Setting.name) private settingModel: Model<SettingDocument>) {}

  async create(createSettingDto: CreateSettingDto): Promise<Setting> {
    const createdSetting = new this.settingModel(createSettingDto);
    return createdSetting.save();
  }

  async findAll(): Promise<Setting[]> {
    return this.settingModel.find().exec();
  }
  
}
