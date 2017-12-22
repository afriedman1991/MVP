// module aliases
import React from 'react';
import ReactDOM from 'react-dom';
import ShapeParams from './components/ShapeParams.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shapes: []
    }
  }

  render () {
    return (<div>
      <h1>Shape Maker</h1>
      <ShapeParams />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
