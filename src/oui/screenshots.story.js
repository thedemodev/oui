import { addDecorator } from '@storybook/react';
import { initScreenshot, withScreenshot } from 'storybook-chrome-screenshot/lib';
addDecorator(initScreenshot());

// Add decorator to entire Storybook instance to grab all stories
addDecorator(withScreenshot({
  // A one-second delay ensures that fonts load before screenshots are taken.
  delay: 500,
  browserTimeout: 5000,
  // We take screenshots at multiple viewport sizes/media queries
  viewport: [
    {
      width: 1280,
      height: 740,
    },
  ],
}));
import '../components/Button/Button.story.js';
