import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean as _boolean, number, select } from '@storybook/addon-knobs';
import Sidebar from './Sidebar';
var stories = storiesOf('Sidebar', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement("div", {
    className: "flex"
  }, React.createElement("div", {
    className: "flex--1 soft"
  }, React.createElement("h2", null, "Content"), React.createElement("p", null, text('content', "Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Nam ac velit eu nibh sagittis laoreet. Nullam et purus vel\n            metus pellentesque sodales. Proin auctor sagittis justo. Nam ipsum\n            turpis, sollicitudin sed pellentesque a, scelerisque ac nisi. Cras\n            arcu tortor, ultrices id fringilla id, venenatis eu lectus. Sed quis\n            turpis eu neque auctor tempus at in sapien. Nunc venenatis ex vitae\n            malesuada volutpat. Aenean non metus quam. Curabitur a dapibus sapien,\n            sit amet tincidunt lacus."))), React.createElement(Sidebar, {
    border: _boolean('border', true),
    isOpen: _boolean('isOpen', true),
    width: number('width', 200)
  }, React.createElement("div", {
    className: "soft"
  }, React.createElement("h2", null, "Sidebar"), React.createElement("div", null, "item 1"), React.createElement("div", null, "item 2"), React.createElement("div", null, "item 3"))));
}).add('Anchor left', function () {
  return React.createElement("div", {
    className: "flex"
  }, React.createElement("div", {
    className: "flex--1 soft"
  }, React.createElement("h2", null, "Content"), React.createElement("p", null, text('content', "Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Nam ac velit eu nibh sagittis laoreet. Nullam et purus vel\n            metus pellentesque sodales. Proin auctor sagittis justo. Nam ipsum\n            turpis, sollicitudin sed pellentesque a, scelerisque ac nisi. Cras\n            arcu tortor, ultrices id fringilla id, venenatis eu lectus. Sed quis\n            turpis eu neque auctor tempus at in sapien. Nunc venenatis ex vitae\n            malesuada volutpat. Aenean non metus quam. Curabitur a dapibus sapien,\n            sit amet tincidunt lacus."))), React.createElement(Sidebar, {
    anchor: select('anchor', {
      left: 'left',
      right: 'right'
    }, 'left'),
    border: _boolean('border', true),
    isOpen: _boolean('isOpen', true),
    width: number('width', 200)
  }, React.createElement("div", {
    className: "soft"
  }, React.createElement("h2", null, "Sidebar"), React.createElement("div", null, "item 1"), React.createElement("div", null, "item 2"), React.createElement("div", null, "item 3"))));
}).add('Docked', function () {
  return React.createElement("div", {
    className: "flex"
  }, React.createElement("div", {
    className: "flex--1 soft"
  }, React.createElement("h2", null, "Content"), React.createElement("p", null, text('content', "Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Nam ac velit eu nibh sagittis laoreet. Nullam et purus vel\n            metus pellentesque sodales. Proin auctor sagittis justo. Nam ipsum\n            turpis, sollicitudin sed pellentesque a, scelerisque ac nisi. Cras\n            arcu tortor, ultrices id fringilla id, venenatis eu lectus. Sed quis\n            turpis eu neque auctor tempus at in sapien. Nunc venenatis ex vitae\n            malesuada volutpat. Aenean non metus quam. Curabitur a dapibus sapien,\n            sit amet tincidunt lacus."))), React.createElement(Sidebar, {
    border: _boolean('border', true),
    docked: _boolean('docked', true),
    isOpen: _boolean('isOpen', true),
    width: number('width', 200)
  }, React.createElement("div", {
    className: "soft"
  }, React.createElement("h2", null, "Sidebar"), React.createElement("div", null, "item 1"), React.createElement("div", null, "item 2"), React.createElement("div", null, "item 3"))));
}).add('Docked with box shadow', function () {
  return React.createElement("div", {
    className: "flex"
  }, React.createElement("div", {
    className: "flex--1 soft"
  }, React.createElement("h2", null, "Content"), React.createElement("p", null, text('content', "Lorem ipsum dolor sit amet, consectetur adipiscing\n            elit. Nam ac velit eu nibh sagittis laoreet. Nullam et purus vel\n            metus pellentesque sodales. Proin auctor sagittis justo. Nam ipsum\n            turpis, sollicitudin sed pellentesque a, scelerisque ac nisi. Cras\n            arcu tortor, ultrices id fringilla id, venenatis eu lectus. Sed quis\n            turpis eu neque auctor tempus at in sapien. Nunc venenatis ex vitae\n            malesuada volutpat. Aenean non metus quam. Curabitur a dapibus sapien,\n            sit amet tincidunt lacus."))), React.createElement(Sidebar, {
    boxShadow: _boolean('boxShadow', true),
    docked: _boolean('docked', true),
    isOpen: _boolean('isOpen', true),
    width: number('width', 200)
  }, React.createElement("div", {
    className: "soft"
  }, React.createElement("h2", null, "Sidebar"), React.createElement("div", null, "item 1"), React.createElement("div", null, "item 2"), React.createElement("div", null, "item 3"))));
});