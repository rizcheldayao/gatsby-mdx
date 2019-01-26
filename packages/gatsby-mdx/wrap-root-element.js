import React from "react";
import { MDXScopeProvider } from "./context";
import defaultOptions from "./utils/default-options";
import scopeContexts from "./loaders/mdx-scopes!";

const WrapRootElement = ({ element }, pluginOptions) => {
  const { plugins } = defaultOptions(pluginOptions);
  plugins.map(plugin => {
    console.log(plugin);
    const str = plugin.resolve || plugin;
    return require(str);
  });
  return (
    <MDXScopeProvider __mdxScope={scopeContexts}>{element}</MDXScopeProvider>
  );
};

export default WrapRootElement;
