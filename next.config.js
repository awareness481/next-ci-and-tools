const { RelativeCiAgentWebpackPlugin } = require('@relative-ci/agent');
const withBundleStats = require('next-plugin-bundle-stats');

module.exports = withBundleStats({
  webpack: function (config, options) {
    const { dev, isServer } = options;

    if (!dev && !isServer) {
      config.plugins.push(
        new RelativeCiAgentWebpackPlugin(),
      );
    }

    return config;
  }
});