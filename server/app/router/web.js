'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/web/setting', controller.web.setting.index);
};
