import { addDecorator } from "@storybook/react"
import { initScreenshot, withScreenshot } from "storybook-chrome-screenshot/lib"
addDecorator(initScreenshot())

// Rather than wrapping an individual story in `withScreenshot()(...)`, we'll add a decorator to the entire Storybook instance. This way, it'll take screenshots of every single story.
addDecorator(withScreenshot({
  // A one-second delay ensures that fonts load before screenshots are taken.
  delay: 1000,
  browserTimeout: 5000,
  // We take screenshots at multiple viewport sizes, to ensure that various media queries are covered.
  viewport: [
    {
      width: 320,
      height: 568,
      isMobile: true,
      hasTouch: true,
    },
    {
      width: 1280,
      height: 800,
    },
  ],
}))
import "../components/Button/Button.story.js"
