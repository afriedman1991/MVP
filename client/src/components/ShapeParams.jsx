// module aliases
import React from 'react';
import ReactDOM from 'react-dom';

class ShapeParams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xPosition: 0,
      yPosition: 0,
      radius: 0
    }
    this.XChange = this.XChange.bind(this);
    this.YChange = this.YChange.bind(this);
    this.radiusChange = this.radiusChange.bind(this);
  }

  XChange(e) {
    this.setState({
      xPosition: e.target.value
    });
  }

  YChange(e) {
    this.setState({
      yPosition: e.target.value
    });
  }

  radiusChange(e) {
    this.setState({
      radius: e.target.value
    })
  }

  render() {
    return(<div>
      <h4>Choose the size and position of your shape!</h4>
      <span>set x-axis position:</span> <input value={this.state.xPosition} onChange={this.XChange}/>
      <span>set y-axis position:</span> <input value={this.state.yPosition} onChange={this.YChange}/>
      <span>set radius position:</span> <input value={this.state.radius} onChange={this.RadiusChange}/>
    </div>)
  }
}

export default ShapeParams;
