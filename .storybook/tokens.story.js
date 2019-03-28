import React from "react";
import { storiesOf } from "@storybook/react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Select from "../src/components/Select";
import TabNav from "../src/components/TabNav";
import Code from "../src/components/Code";
import Icon from "react-oui-icons";

import css from "/Users/drau/Sites/csswhat/css/oui.css.json";
import designTokens from "../src/tokens/src/color.json";
// import OUItokens from "@optimizely-oui/src/tokens/forimport/index.es";

const stories = storiesOf("Design Tokens/", module);
stories.addDecorator(story => <div id="root-preview">{story()}</div>);

stories.add("All Tokens", () => {
  return (
    <div className="reading-column">
      <h1 className="push--bottom">
        Axiom Design Tokens <span className="muted">v1.0.0</span>
      </h1>
      <div className="push-quad--bottom">
        <p>
          Our design tokens serve as global design variables across apps,
          products and services.
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
                <Icon name="clipboard" />
                <span className="cursor--pointer push-half--left">
                  {item.id}
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
