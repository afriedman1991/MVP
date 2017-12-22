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

getaGif() {
  
}

  render () {
    return (
      <div>
        <h1>Welcome to Gif Generator! Click the button below to get a random gif from the internets :3</h1>
        <button>Get a gif!</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
