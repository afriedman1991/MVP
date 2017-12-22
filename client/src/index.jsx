// module aliases
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGif: null
    }
  }

  render () {
    return (<div>
      <h1>Hello world</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
