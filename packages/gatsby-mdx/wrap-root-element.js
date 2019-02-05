import React from "react";
import { MDXScopeProvider } from "./context";
import scopeContexts from "./loaders/mdx-scopes!";
import { plugins as mdxPlugins } from "./loaders/mdx-components!";

const componentsAndGuards = {};

const WrapRootElement = ({ element }, pluginOptions) => {
  mdxPlugins.forEach(({ guards, components }) => {
    Object.entries(components).forEach(([componentName, Component]) => {
      if (componentsAndGuards[componentName]) {
        componentsAndGuards.push({ guard: guards[componentName], Component });
      } else {
        componentsAndGuards[componentName] = [
          { guard: guards[componentName], Component }
        ];
      }
    });
  });

  return (
    <MDXScopeProvider __mdxScope={scopeContexts}>{element}</MDXScopeProvider>
  );
};

export default WrapRootElement;
