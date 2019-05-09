import React from 'react';
import _ from 'lodash';
import { storiesOf } from '@storybook/react';
// import css from '../data/oui.css.json';
import css from '/Users/drau/Sites/csswhat/css/oui.css.json';
// import css from '/Users/drau/Sites/csswhat/css/optly_full_v3.css.json';

const searchSelectors = function(e) {
  console.log(e);
  console.log(this);
}

const stories = storiesOf('CSS/', module);
stories
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
.add('Stats', () => {
  console.log(css);
  return (
    <div>
      <h2>Stats</h2>
      <ul>
        <li><h3><span className="muted">Size</span> {css.filesize}</h3></li>
        <li><h3><span className="muted">Rules</span> {css.rules.length}</h3></li>
        <li><h3><span className="muted">Selectors</span> {css.selectors.length}</h3></li>
        <li><h3><span className="muted">Declarations</span> {css.declarations.length}</h3></li>

        <li><h3><span className="muted">Properties</span> {_.uniq(css.properties).length}</h3></li>
        <li><h3><span className="muted">Values</span> {_.uniq(css.values).length}</h3></li>
        <li><h3><span className="muted">!important</span> {css.importants}</h3></li>
        <li><h3><span className="muted">Colors</span> {_.uniq(css.hexCounts).length}</h3></li>
      </ul>
    </div>
  );
})
.add('Colors', () => {
  console.log(css);
  return (
    <div>

      <h2>Frequently Used Colors
       ({ css.uniqueColors.length })</h2>
       <p>To find these colors first we convert every known color value to hex (rgb(a), hsl(a), and HTML named colors (rebeccapurple). What it doesn't yet cover is color variables/tokens.</p>
      <div className="oui--swatches flex flex-wrap push--ends">
        { css.uniqueColors.map(item => (
          console.log(item),
          <span key={ item.color } className="width--50 height--50 flex flex--dead-center" style={{ backgroundColor: item.color }}>{ item.count }</span>
        )) }
      </div>

      <h2 className="push-quad--top">One-off Colors
       ({ css.oneOfAKindColors.length })</h2>
      <div className="oui--swatches flex flex-wrap push--ends">
        { css.oneOfAKindColors.map(item => (
          console.log(item),
          <span key={ item.color } className="width--50 height--50 flex flex--dead-center" style={{ backgroundColor: item.color }}>{ item.count }</span>
        )) }
      </div>

      <h2 className="push-quad--top">One-off Alpha Colors
       ({ css.oneOfAKindAlphaHexesColors.length })</h2>
      <div className="oui--swatches flex flex-wrap push--ends">
        { css.oneOfAKindAlphaHexesColors.map(item => (
          console.log(item),
          <span key={ item.color } className="width--50 height--50 flex flex--dead-center" style={{ backgroundColor: item.color }}>{ item.count }</span>
        )) }
      </div>

    </div>
  )})
  .add('Search', () => {
    console.log(css.selectors);
    return (
      <div>
        <h2>Search</h2>
        <input type="text" onKeyUp={ searchSelectors } />
        <ul>
          ...
        </ul>
      </div>
    );
  });
