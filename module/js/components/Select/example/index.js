/* eslint-disable react/jsx-key */
import React from 'react';
import Select from '../index';
export default [{
  examples: [React.createElement(Select, {
    name: "zoo",
    id: "zoo"
  }, React.createElement("option", {
    value: "one"
  }, "This is option one"), React.createElement("option", {
    value: "two"
  }, "And this is option two"))]
}];