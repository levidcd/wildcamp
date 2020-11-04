import { Test, TestingModule } from '@nestjs/testing';
import { SettingsService } from './settings.service';
import { SettingsModule } from './settings.module';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Setting, SettingSchema } from './schemas/setting.schema';
import { SettingsController } from './settings.controller';
import { CreateSettingDto } from './dto/create-Setting.dto';

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(async () => {
    function mockSettingModel(dto: any) {
      this.data = dto;
      this.save = () => {
        return this.data;
      };
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SettingsService,
        {
          provide: getModelToken(Setting.name),
          useValue: mockSettingModel,
        },
      ],
    }).compile();

    service = module.get<SettingsService>(SettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return "Hello World!"', () => {
    expect(service.create({ age: 1, name: '1', breed: '' })).toBeDefined();
    // service.findAll().then(res => console.log(res));
  });
});
