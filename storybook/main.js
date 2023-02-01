const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@/apis': path.resolve(__dirname, '../src/apis'),
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/screens': path.resolve(__dirname, '../src/screens'),
      '@/routes': path.resolve(__dirname, '../src/routes'),
      '@/constants': path.resolve(__dirname, '../src/constants'),
      '@/assets': path.resolve(__dirname, '../src/assets'),
    };

    return config;
  },
};
