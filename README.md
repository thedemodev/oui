<p align="center">
  <a href="http://optimizely.github.io/oui/storybook/">
    <img width="200" src="https://raw.githubusercontent.com/optimizely/oui/devel/assets/louis.gif" title="Meet Louis, the official mascot of OUI">
  </a>
</p>

<h1 align="center">OUI Component Library</h1>

<div align="center">

A custom CSS and React component framework that powers the Optimizely user interface.

[![Build Status](https://travis-ci.org/optimizely/oui.svg?branch=devel)](https://travis-ci.org/optimizely/oui)
[![codecov](https://codecov.io/gh/optimizely/oui/branch/devel/graph/badge.svg)](https://codecov.io/gh/optimizely/oui)
[![Gitter](https://badges.gitter.im/optimizely/oui.svg)](https://gitter.im/optimizely/oui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

</div>

## 🔗 Links

- [Storybook](http://optimizely.github.io/oui/storybook/)
- [Archived SASS documentation](http://design.optimizely.com/docs/oui/9.0.0/) (requires VPN access)

## 📦 Install

```bash
git clone https://github.com/optimizely/oui.git
yarn install
yarn storybook
```

## Request a Component

1. First, add your React component to Optimizely.git so you aren't blocked by OUI to release this feature.
2. Get your component HTML/CSS reviewed by a UI Engineer for code quality (required). Or you can request we create the HTML.
2. Submit a JIRA ticket to UI Engineering that including:
  - Who designed this component? (We'll need to talk to them about documenting the use cases.)
  - Are there at least two use cases in the app currently? (More than two use cases means it's a good candidate for an OUI component; please attach screen shots.)

## Contribute

Read [how to contribute to OUI](CONTRIBUTING.md) for instructions on making pull requests.

## React

To use an OUI component inside your React app:

```jsx
import React from 'react';
import { Button } from 'optimizely-oui';
...
return ( <Button size="tiny">Click Me</Button> );
```

## Sass

To use OUI Sass variables and mixins in your project read [how to use OUI sass](readme-sass.md).
