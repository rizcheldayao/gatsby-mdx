const path = require("path");
const slash = require("slash");
const loaderUtils = require("loader-utils");

module.exports = source => {
  const options = loaderUtils.getOptions(this);

  // replace this with something that uses the redux store gatsby config?
  const json = require(path.resolve("./gatsby-config.js"));
  const plugins = json.plugins.find(plugin => plugin.resolve === "gatsby-mdx")
    .options.mdxPlugins;

  // generates: [require('some-plugin'), require('some-other-plugin')]
  const pluginRequires =
    "[" + plugins.map(plugin => "require('" + plugin + "')").join(",\n") + "]";

  return `module.exports = {plugins: ${pluginRequires}}`;
};
