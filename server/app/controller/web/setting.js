'use strict';

const Controller = require('../../core/base_controller');

class SettingController extends Controller {
  async index() {
    const settingData = await this.ctx.service.web.find();
    this.success(settingData);
  }
}

module.exports = SettingController;
