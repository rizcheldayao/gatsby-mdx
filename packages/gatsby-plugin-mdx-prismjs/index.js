const React = require("react");

exports.guards = {};
exports.components = {
  inlineCode: props => React.createElement("code", undefined, props),
  pre: props =>
    console.log("prism props", props) || React.createElement("pre", props)
};
