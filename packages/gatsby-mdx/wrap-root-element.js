import React from "react";
import { MDXProvider } from "@mdx-js/tag";
import { MDXScopeProvider } from "./context";
import scopeContexts from "./loaders/mdx-scopes!";
//import { plugins as mdxPlugins } from "./loaders/mdx-components!";

const componentsAndGuards = {};

const componentFromGuards = arr => props => {
  const { Component } = arr.find(
    ({ guard, Component }) => (guard ? guard(props) : true)
  );
  return <Component {...props} />;
};

const WrapRootElement = ({ element }, pluginOptions) => {
  console.log(pluginOptions.mdxPlugins);
  const {
    plugins: mdxPlugins
  } = require("./loaders/mdx-components?test=something&afklj!");
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

  const components = Object.entries(componentsAndGuards)
    .map(([name, arr]) => ({
      [name]:
        console.log("arr", componentFromGuards(arr)) || componentFromGuards(arr)
    }))
    .reduce((acc, obj) => ({ ...acc, ...obj }));

  return (
    <MDXScopeProvider __mdxScope={scopeContexts}>
      <MDXProvider components={components}>{element}</MDXProvider>
    </MDXScopeProvider>
  );
};

export default WrapRootElement;
