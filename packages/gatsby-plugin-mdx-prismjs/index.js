const React = require("react");

exports.guards = {};
exports.components = {
  inlineCode: props => React.createElement("code", undefined, props),
  pre: props => React.createElement("pre", undefined, props)
};
