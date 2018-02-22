import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'

import styled from 'styled-components'

const Grid = styled.div`
  background: gainsboro;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-gap: 1px 0px;
  
  > div {
    background: white;
    padding: 10px 0px;
  }
  .prop-name {
    color: #0081BA;
  }
`;

const PropsGrid = ({
  componentProps
}) => {
  let data = [];

  if (componentProps) {
    Object.keys(componentProps).map((prop, i) => {
      // name wiTH *required comment
      let propDisplayName = prop;
      if (componentProps[prop].required) {
        propDisplayName = `*${prop}(required)`;
      }

      // handle enum types
      let propDisplayType = componentProps[prop].type.name;
      if (propDisplayType === 'enum') {
        propDisplayType = (
          <div>
              {
                componentProps[prop].type.value.map(v => {
                  return (
                    <div key={ v.value }>
                      <div>{ v.value }</div>
                    </div>
                  );
                })
              }
          </div>
        );
      }

      data = [
        ...data,
        [
          propDisplayName,
          propDisplayType,
          componentProps[prop].description,
        ]
      ];
    });
  }

  return (
    <Grid>
        <div>Prop</div>
        <div>Type</div>
        <div>Description</div>
        {
          data.map((prop) => {
            return [
              <div className='prop-name'>{ prop[0] }</div>,
              <div>{ prop[1] }</div>,
              <div>
                <span dangerouslySetInnerHTML={{ __html: marked.inlineLexer(prop[2], []) }}></span>
              </div>
              ];
          })
        }

    </Grid>
  );
};

PropsGrid.propTypes = {
  componentProps: PropTypes.object,
};

export default PropsGrid;
