const React = require('react');

const EmptyDashboard = ({
  button,
  imagePath,
  headline,
  description,
  descriptionMaxWidth,
  testSection,
} = this.props) => {
  return (
    <div
      className='flex overflow-y--scroll flex--1'
      data-test-section='layers-empty-state'
      style={{ width: '750px', margin: 'auto' }}>
      <div className='anchor--middle height--1-1 flex flex--column'>

        <div
          data-ui-component={ true }
          className='text--center soft-quad'
          data-test-section={ testSection }>

          { imagePath && (
            <div
              className="muted push-double--bottom"
              style={{ width: '550px', margin: 'auto' }}>
              <object
                data={ imagePath }
                className="svg--non-scaling-stroke display--inline"
                style={{ maxWidth: '450px', maxHeight: '290px' }}
                data-test-section={ testSection && `${testSection}-image` }
                alt=""
              />
            </div>
          ) }

          { headline && (
            <h1
              className="alpha push--bottom"
              data-test-section={ testSection && `${testSection}-headline` }>
              { headline }
            </h1>
          ) }

          { description && (
            <div
              className="muted push--bottom anchor--middle"
              style={{ maxWidth: descriptionMaxWidth }}
              data-test-section={ testSection && `${testSection}-description` }>
              { description }
            </div>
          ) }

          { button && (
            <div className="push-double--top">
              { button }
            </div>
          ) }
        </div>

      </div>
    </div>
  );
};

EmptyDashboard.propTypes = {
  /** A button, link, or other element that is actionable */
  button: React.PropTypes.node,
  /** A string or `div` containing longer text that describes the empty state */
  description: React.PropTypes.element,
  /** Max width of description. Accepts any valid CSS width value. */
  descriptionMaxWidth: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  /** Short text about the empty state */
  headline: React.PropTypes.string.isRequired,
  /** Path to an image representing the empty state */
  imagePath: React.PropTypes.string,
  /** Identifier used to create data-test-section attributes for testing */
  testSection: React.PropTypes.string,
};

EmptyDashboard.getDefaultProps = {
  descriptionMaxWidth: '450px',
  testSection: 'empty-hello',
};

module.exports = EmptyDashboard;
