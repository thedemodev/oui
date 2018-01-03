import React from 'react';
import popperJS from 'popper.js';

export default class Popper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refDict: {}
    };
    this.update = this.update.bind(this);
  }

  update() {
    if (this.state.popper) {
      this.state.popper.update();
      this.setState({raf: window.requestAnimationFrame(this.update)});
    }
  }

  componentDidMount() {
    let popper = new popperJS(this.state.refDict.content, this.state.refDict.popper, {
      placement: 'top',
      modifiersIgnored: ['applyStyle'],
      arrowElement: this.state.refDict.arrow
    })
    popper.onUpdate(data => {
      this.setState({data});
    })
    this.setState({popper}, this.update);
  }

  componentWillUnmount() {
    this.state.popper.destroy();
    if (this.state.raf) {
      window.cancelAnimationFrame(this.state.raf);
    }
  }

  getPopperStyle(data) {
    if (!data) { return {}; }
    const left = Math.round(data.offsets.popper.left);
    const top = Math.round(data.offsets.popper.top);
    const transform = `translate3d(${left}px, ${top}px, 0)`;
    return {
      position: data.offsets.popper.position,
      transform,
      WebkitTransform: transform,
      top: 0,
      left: 0
    };
  }

  render() {
    const { children, arrow } = this.props;
    return (
      <div>
        <div ref={el => this.refDict.content = el} className='popper-content'>
          {this.props.children[0]}
        </div>
        <div ref={el => this.refDict.popper = el} data-placement={this.state.data && this.state.data.placement} className='popper' style={this.getPopperStyle(this.state.data)}>
          {this.props.children[1]}
          {arrow && <div ef={el => this.refDict.arrow = el} className='arrow' />}
        </div>
      </div>
    );
  }
}