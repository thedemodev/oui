import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, object, text, number, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from '../Button';
import Input from '../Input';

import ExampleComponent from './index.js';


// Temporary hack until Storybook fixes this.
// https://github.com/storybooks/storybook/issues/3759
import infoAddon, { setDefaults } from '@storybook/addon-info';
setDefaults({
  components: {
    p({ children }) {
      return <p>{children}</p>;
    },
  },
});


/**
 * This is a clone of the contents of README.md,
 * temporarily inlined due to Storybook Issue #3458 (see below)
 *
 * TODO(https://github.com/storybooks/storybook/issues/3458) Remove and use imported README.md #3458 is released and we've updated
 * TODO(https://github.com/storybooks/storybook/issues/4499) Find a way to improve markdown formatting in the "Show Info" section
 */
/* eslint-disable max-len */
const infoAddonConfig = {
  header: false,
  text: `
# ExampleComponent

### ABOUT:
The ExampleComponent, while not actually exported, serves as a reference for how to create or update components. Every component should include the following:

-- index.js
-- ComponentName.story.js
-- README.mkd

Aditionally, subcomponents or an \`index.scss\` file can be added to the component and imported in \`src/oui/_oui-partials.scss\` (please use existing OUI classes when possible and consult UI Eng when adding styles is absolutely necessary).

### Composition vs Inheritance
As mentioned in the [docs](https://reactjs.org/docs/composition-vs-inheritance.html), React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components. As you create components and try out new patterns, consider linking to those in this file.

### Adopt Storybook Driven Development
Storybook is the best way to learn about, play with, prototype, and build OUI components. Storybook runs locally and will watch for component and documentation updates. Visit http://storybooks-official.netlify.com/ for inspiration on all that is possible!

Every component should contain a README, prop definitions, and a robust set of Storybook examples (stories). This will allow for quicker adoption and help Storybook to serve as the best hub for OUI technical documentation. **If you create or update a component, it shouldn't be considered finished until you've completed the following:**

-- Run Storybook and watch assets via \`yarn storybook\`
-- Copy or reference the format of this [ExampleComponent](./data/components/ExampleComponent) to ensure your component's README and stories are set up correctly
-- Include accurate \`propType\` configurations and comments, as well as \`defaultProps\` if applicable (these details are pulled into the _show info_ section)
-- Add README.md with component usage information and implementation tips (see note below)

>Note: until Storybook Issues [#3458](https://github.com/storybooks/storybook/issues/3458) and [#4499](https://github.com/storybooks/storybook/issues/4499) are resolved, each component README should be added in your **_*.story.js** file. Additionally using double-spaces at the end of each line and a period + double-space for line breaks will help make the files more readable.
`,
};
/* eslint-enable max-len */

storiesOf('Overview/', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      { story() }
    </div>
  ))
  .add('Example Story', withInfo(infoAddonConfig)(() => {
    const OBJECTS_GROUP_NAME = 'Objects and Arrays';

    const aStringValue = text('aString', 'Hello World!');
    const aNumberValue = number('aNumber', 5);
    const aBooleanValue = boolean('aBoolean', true);
    const anActionString = select('anActionString', ['Lights!', 'Camera!', 'Action!'], 'Action!');
    const anArrayValue = object('anArray', [ 1, 2, 3 ], OBJECTS_GROUP_NAME);
    const anObjectValue = object('anObject', { width: 50, color: 'yellow' }, OBJECTS_GROUP_NAME);

    return (
      <ExampleComponent
        aString={ aStringValue }
        aNumber={ aNumberValue }
        aBoolean={ aBooleanValue }
        aFunction={ action(anActionString) }
        anArray={ anArrayValue }
        anObject={ anObjectValue }>
        {
          ({
            aString,
            aNumber,
            aBoolean,
            aFunction,
            anArray,
            anObject,
            handleInputUpdate,
            name,
          }) => (
            <React.Fragment>
              <h1>Example OUI Component, Story, and README</h1>
              <p>
                  This component uses the <a href="https://reactjs.org/docs/render-props.html" target="_blank" rel="noopener noreferrer">render props</a> pattern to allow for more extensibility while abstracting some common complexity. Check out the README in the "Show Info" section for more info!
              </p>
              <p className="micro">These paragraphs have their background color changed by the ExampleComponent's sass.</p>
              <fieldset className="push-double--top">
                <h3>Abstrating State Management</h3>
                <div className="push--ends">
                  <Input
                    type="text"
                    onChange={ handleInputUpdate }
                    value={ name }
                    placeholder="Type in me!"
                  />
                  { !!name && (
                    <div className="push-half--top">
                      <span className="weight--bold">Input Value:</span> { name }
                      <div className="micro">The state for this is stored in the Render Component!</div>
                    </div>
                  ) }
                </div>
              </fieldset>
              <h3>Using a Render Component to Transform Props</h3>
              <div className="micro">Use the Storybook Knobs feature to update these.</div>
              <div className="push--ends">
                <Button style="outline" onClick={ aFunction }>Press Me and Check Out the Action Logger!</Button>
              </div>
              <div className="push--ends">
                <span className="weight--bold">Updated <em>anArray</em> value:</span> { JSON.stringify(anArray) }
              </div>
              <div className="push--ends">
                <span className="weight--bold">Updated <em>anObject</em> value:</span> { JSON.stringify(anObject) }
              </div>
              <div className="push--ends">
                <span className="weight--bold">Updated <em>aString</em> value:</span> { aString }
              </div>
              <div className="push--ends">
                <span className="weight--bold">Updated <em>aNumber</em> value:</span> { aNumber }
              </div>
              <div className="push--ends">
                <span className="weight--bold">Updated <em>aBoolean</em> value:</span> { String(aBoolean) }
              </div>
            </React.Fragment>
          )
        }
      </ExampleComponent>
    );
  }));
