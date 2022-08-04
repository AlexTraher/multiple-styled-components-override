const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mfe",
    projectName: "mfe-2",
    webpackConfigEnv,
    argv,
  });

  delete defaultConfig.externals;

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
