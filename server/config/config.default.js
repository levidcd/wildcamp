/* eslint valid-jsdoc: "off" */
'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1603958083609_5759';

  // add your middleware config here
  config.middleware = [ 'gzip' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    // 配置 gzip 中间件的配置
    gzip: {
      threshold: 1024, // 小于 1k 的响应体不压缩
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
