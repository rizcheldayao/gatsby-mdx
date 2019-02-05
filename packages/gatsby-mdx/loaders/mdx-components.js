const fs = require("fs");
const path = require("path");
const slash = require("slash");

module.exports = () => {
  const json = require(path.resolve("./gatsby-config.js"));
  const plugins = json.plugins.find(plugin => plugin.resolve === "gatsby-mdx")
    .options.mdxPlugins;

  const pluginRequires =
    "[" + plugins.map(plugin => "require('" + plugin + "')").join(",\n") + "]";

  return `module.exports = {plugins: ${pluginRequires}}`;
};
