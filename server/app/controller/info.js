"use strict";

const Controller = require("egg").Controller;

class InfoController extends Controller {
  async index(){
    const {ctx} =this;
    return ctx.body = '11'
  }
}


module.exports = InfoController