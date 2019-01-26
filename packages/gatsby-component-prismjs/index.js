import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { preToCodeBlock } from "mdx-utils";

const Code = ({ codeString, language, ...props }) => {
  return (
    <Highlight {...defaultProps} code={codeString} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const GatsbyComponentPrismjsReplacement = preProps => {
  const props = preToCodeBlock(preProps);
  // if there's a codeString and some props, we passed the test
  if (props) {
    return <Code {...props} />;
  } else {
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />;
  }
};

export default GatsbyComponentPrismjsReplacement;
