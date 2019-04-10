import React from "react";
const _ = require('lodash');
import { storiesOf } from "@storybook/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Code from "../src/components/Code";
import designTokens from "../src/tokens/src/color.json";

const stories = storiesOf("Design Tokens/", module);
stories.addDecorator(story => <div id="root-preview">{story()}</div>);

stories.add("Overview", () => {
  return (
    <div className="reading-column">
      <h1 className="push--bottom">
        Axiom Design Tokens <span className="muted">v1.0.0</span>
      </h1>
      <div className="push-quad--bottom">
        <p className="delta">
          Think of design tokens as <strong>global design variables for a given context</strong> that can be used across our apps, products and services.
        </p>
        <p>
          Design tokens represent the fundamental visual attributes of our design system. We use these tokens in place of hard-coded values such as hex colors or pixel sizes in order to maintain a scalable and consistent user interface.
        </p>
      </div>
    </div>
  );
});
stories.add("Colors", () => {
  return (
    <div className="reading-column">
      <h1 className="push--bottom">
        Axiom Design Tokens <span className="muted">v1.0.0</span>
      </h1>
      <div className="push-quad--bottom">
        <p>
          Design tokens are global design variables for a given context.
          <span className="push-half--left micro muted">(Available in JavaScript and Sass)</span>
        </p>

        <Code
          hasCopyButton
          testSection="my-code-box"
          type="block"
          language="js"
        >
          import designTokens from
          "@optimizely-oui/src/tokens/forimport/index.es";
        </Code>
      </div>

      <h3 className="push-double--bottom">
        Colors <span className="muted">({designTokens.tokens.length})</span>
      </h3>
      <ul className="oui-list push--ends">
        {designTokens.tokens.map(item => (
          <CopyToClipboard text={item.id} key={item.id}>
            <li className="border--bottom soft--bottom soft--sides push--bottom flex flex-align--center">
              <span className="flex flex--1">
                <span className="cursor--pointer push-half--left">
                  {_.camelCase(item.id)}
                </span>
              </span>
              <span className="flex">
                <span
                  key={item.id}
                  className="cursor--pointer width--100 flex flex--dead-center"
                  style={{ backgroundColor: item.hex, height: "20px" }}
                />
              </span>
            </li>
          </CopyToClipboard>
        ))}
      </ul>
    </div>
  );
});
