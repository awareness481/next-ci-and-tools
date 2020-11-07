const { RelativeCiAgentWebpackPlugin } = require("@relative-ci/agent");
const withBundleStats = require("next-plugin-bundle-stats");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    [withBundleAnalyzer({})],
    withBundleStats(),
    // your other plugins here
  ],
  {
    webpack: function (config, options) {
      const { dev, isServer } = options;

      if (!dev && !isServer) {
        config.plugins.push(new RelativeCiAgentWebpackPlugin());
      }

      return config;
    },
  }
);
