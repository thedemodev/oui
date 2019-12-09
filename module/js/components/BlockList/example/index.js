/* eslint-disable react/jsx-key */
import React from 'react';
import BlockList from '../index';
import OverlayWrapper from '../../OverlayWrapper/index';
import Button from '../../Button';
import Icon from 'react-oui-icons';

var mockFunction = function mockFunction() {};

export default [{
  examples: [React.createElement(BlockList, null, React.createElement(BlockList.Category, {
    header: "Recent Pages"
  }, React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Home"), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Shopping Cart"), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Order Confirmation")))]
}, {
  examples: [React.createElement(BlockList, null, React.createElement(BlockList.Category, {
    header: React.createElement("div", {
      className: "flex"
    }, React.createElement("div", {
      className: "flex--1"
    }, "Attic & Button"), React.createElement("div", null, React.createElement("a", {
      href: "https://www.example.com/"
    }, "https://www.example.com/")))
  }, React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Home"), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Shopping Cart"), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Order Confirmation")))]
}, {
  examples: [React.createElement(BlockList, null, React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "onClick Example")), React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, {
    href: "https://www.optimizely.com/",
    hrefTarget: "_blank"
  }, "href Example")), React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, React.createElement("div", {
    className: "flex flex-align--center"
  }, React.createElement("div", {
    className: "flex--1"
  }, React.createElement("div", null, "Complex Item"), React.createElement("div", {
    className: "muted micro"
  }, "This is the item description.")), React.createElement(Button, {
    size: "small",
    style: "outline"
  }, "Inner Button")))), React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, null, "Plain Text Example")))]
}, {
  examples: [React.createElement(BlockList, null, React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Archive"), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Pause")), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "View Results"))]
}, {
  examples: [React.createElement(BlockList, {
    hasBorder: false
  }, React.createElement(BlockList.Category, null, React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Archive"), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Pause")), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "View Results"))]
}, {
  examples: [React.createElement(OverlayWrapper, {
    overlay: React.createElement(BlockList, null, React.createElement(BlockList.Item, {
      onClick: mockFunction
    }, "Archive"), React.createElement(BlockList.Item, {
      onClick: mockFunction
    }, "Pause"), React.createElement(BlockList.Item, {
      onClick: mockFunction
    }, "View Results")),
    horizontalAttachment: "left",
    horizontalTargetAttachment: "left",
    verticalAttachment: "top",
    verticalTargetAttachment: "bottom"
  }, React.createElement(Button, {
    style: "unstyled"
  }, React.createElement(Icon, {
    name: "ellipsis"
  })))]
}, {
  examples: [React.createElement(BlockList, null, React.createElement(BlockList.Category, {
    header: "Recent Pages"
  }, React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lectus nulla, placerat at semper in, bibendum in lorem. Aenean rhoncus ac lectus et rutrum. Sed et arcu sit amet leo maximus facilisis quis non augue. Nullam enim sem, hendrerit id sapien ac, rhoncus hendrerit tortor. Proin id elit elementum, iaculis est vitae, ullamcorper neque. Proin efficitur porttitor nunc quis suscipit. Maecenas odio elit, varius et aliquam ac."), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "https://wwww.example.com/path1/path2/path3/path4/path5/superlongvaluethatdoesntfitintheblocklistwhenitgetsveryveryveryveryveryveryveryveryverylong")))]
}, {
  examples: [React.createElement(BlockList, {
    maxHeight: '150px'
  }, React.createElement(BlockList.Category, {
    header: "BlockList with Scroll"
  }, React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet."), React.createElement(BlockList.Item, {
    onClick: mockFunction
  }, "Lorem ipsum dolor sit amet.")))]
}];