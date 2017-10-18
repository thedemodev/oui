/* eslint-disable react/jsx-key */
import React from 'react';
import Card from '../index';

const someMethod = () => { return true; };
export default [
  {
    examples: [
      <Card title="this is a title">
        <div>
          Hello World
        </div>
      </Card>,
    ],
  },
  {
    examples: [
      <Card title="this is a title" onClose={ someMethod } testSection="data-track-card-close">
        <div>
          Hello World with closer element
        </div>
      </Card>,
    ],
  },
];
