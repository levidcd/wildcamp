'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find() {
    return {
      11: 11,
    };
  }
}

module.exports = UserService;
