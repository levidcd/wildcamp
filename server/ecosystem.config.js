module.exports = {
  apps: [
    {
      name: 'admin',
      script: './admin/main.js',
      // watch: true,
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'web',
      script: './web/main.js',
      // instances: 4,
      // exec_mode: 'cluster',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
