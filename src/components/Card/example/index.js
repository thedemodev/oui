/* eslint-disable react/jsx-key */
import React from 'react';
import Card from '../index';

const someMethod = () => { return true; };
export default [
  {
    examples: [
      <Card title="Title">
        Hello World
      </Card>,
    ],
  },
  {
    examples: [
      <Card title="Title" onClose={ someMethod } testSection="data-track-card-close">
        Hello World with closer element
      </Card>,
    ],
  },
  {
    examples: [
      <Card>
        Blank card
      </Card>,
    ],
  },
  {
    examples: [
      <Card shadow={ true }>
        Shadow
      </Card>,
    ],
  },
];
