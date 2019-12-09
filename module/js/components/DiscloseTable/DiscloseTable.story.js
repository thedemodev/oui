import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import DiscloseTable from './index.js';
import Table from '../Table';
var stories = storiesOf('DiscloseTable', module);
stories.addDecorator(withKnobs).addDecorator(function (story) {
  return React.createElement("div", {
    id: "root-preview"
  }, story());
});
stories.add('Default', function () {
  return React.createElement("div", null, React.createElement(DiscloseTable, null, React.createElement(Table.THead, null, React.createElement(Table.TR, null, React.createElement(Table.TH, {
    isCollapsed: true
  }), React.createElement(Table.TH, null, "Experiment Name"), React.createElement(Table.TH, {
    isNumerical: true
  }, "Start Date"), React.createElement(Table.TH, {
    isNumerical: true
  }, "End Date"), React.createElement(Table.TH, {
    isNumerical: true
  }, "Visitors"), React.createElement(Table.TH, null, "Status"), React.createElement(Table.TH, null, "Project"), React.createElement(Table.TH, {
    isNumerical: true
  }, React.createElement("div", {
    className: "push-half--right"
  }, "Type")))), React.createElement(Table.TBody, null, React.createElement(DiscloseTable.Row, {
    rowContents: [React.createElement(Table.TD, {
      key: 'exp_name',
      verticalAlign: "middle"
    }, "Experiment 1"), React.createElement(Table.TD, {
      key: 'exp_start_date',
      isNumerical: true,
      verticalAlign: "middle"
    }, "May 5, 2018"), React.createElement(Table.TD, {
      key: 'exp_end_date',
      isNumerical: true,
      verticalAlign: "middle"
    }, "June 1, 2018"), React.createElement(Table.TD, {
      key: 'exp_visiors',
      isNumerical: true,
      verticalAlign: "middle"
    }, "358"), React.createElement(Table.TD, {
      key: 'exp_status',
      verticalAlign: "middle"
    }, "Running"), React.createElement(Table.TD, {
      key: 'exp_project',
      verticalAlign: "middle"
    }, "Optimizely App - Web long name contains a long list of characters which is totally unexpetected"), React.createElement(Table.TD, {
      key: 'exp_type',
      isNumerical: true,
      verticalAlign: "middle"
    }, React.createElement("div", {
      className: "push-half--right"
    }, "A/B"))]
  }, React.createElement("div", {
    className: "flex soft-double--sides"
  }, React.createElement("div", null, React.createElement(Table, null, React.createElement(Table.THead, null, React.createElement(Table.TR, null, React.createElement(Table.TH, null, "Variations"), React.createElement(Table.TH, null, "Recorded Results"))), React.createElement(Table.TBody, null, React.createElement(Table.TR, null, React.createElement(Table.TD, null, React.createElement("span", {
    className: "soft--right muted"
  }, "A"), "Variation name short"), React.createElement(Table.TD, null, "Not Analyzed")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, React.createElement("span", {
    className: "soft--right muted"
  }, "B"), "Variation name long contains a lot of characters as you can see here as well."), React.createElement(Table.TD, null, "Win")), React.createElement(Table.TR, null, React.createElement(Table.TD, null, React.createElement("span", {
    className: "soft--right muted"
  }, "C"), "Variation name short"), React.createElement(Table.TD, null, "Baseline"))))), React.createElement("div", {
    className: "soft-double--right"
  }, React.createElement(Table, null, React.createElement(Table.THead, null, React.createElement(Table.TR, null, React.createElement(Table.TH, null, "Idea"))), React.createElement(Table.TBody, null, React.createElement(Table.TR, null, React.createElement(Table.TD, null, React.createElement("a", null, "Rollout MGMT to specific users"))))), React.createElement(Table, null, React.createElement(Table.THead, null, React.createElement(Table.TR, null, React.createElement(Table.TH, null, "Analysis"))), React.createElement(Table.TBody, null, React.createElement(Table.TR, null, React.createElement(Table.TD, null, React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora.")))))))), React.createElement(DiscloseTable.Row, {
    rowContents: [React.createElement(Table.TD, {
      key: 'exp_name'
    }, "Experiment 2 has a very long name as you can see as well here that its a really long name"), React.createElement(Table.TD, {
      key: 'exp_start_date',
      isNumerical: true,
      verticalAlign: "middle"
    }, "May 5, 2018"), React.createElement(Table.TD, {
      key: 'exp_end_date',
      isNumerical: true,
      verticalAlign: "middle"
    }, "June 1, 2018"), React.createElement(Table.TD, {
      key: 'exp_visiors',
      isNumerical: true,
      verticalAlign: "middle"
    }, "358"), React.createElement(Table.TD, {
      key: 'exp_status',
      verticalAlign: "middle"
    }, "Paused"), React.createElement(Table.TD, {
      key: 'exp_project',
      verticalAlign: "middle"
    }, "Optimizely App - Web long name..."), React.createElement(Table.TD, {
      key: 'exp_type',
      isNumerical: true,
      verticalAlign: "middle"
    }, React.createElement("div", {
      className: "push-half--right"
    }, "A/B"))]
  }, React.createElement("p", {
    className: "soft--sides"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id voluptas vitae eius expedita alias iste deserunt rndis earum voluptatibus quae, numquam dolorum perspiciatis accusantium corporis, beatae maxime quasi. Tempora.")))));
});