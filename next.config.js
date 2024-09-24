const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.module.rules.push({
        test: /\.pdf$/,
        use: 'file-loader',
        include: path.resolve(__dirname, 'files'),
      });
    }
    return config;
  },
};
