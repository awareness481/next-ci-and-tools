const { RelativeCiAgentWebpackPlugin } = require('@relative-ci/agent');

module.exports = {
  webpack: function (config, options) {
    const { dev, isServer } = options;

    if (!dev && !isServer) {
      config.plugins.push(
        new RelativeCiAgentWebpackPlugin(),
      );
    }

    return config;
  }
};