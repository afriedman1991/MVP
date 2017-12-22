// module aliases
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RenderGif from './RenderGif.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGif: null
    }
    this.getaGif = this.getaGif.bind(this);
  }

getaGif() {
  axios.get('http://localhost:8000/genGif')
  .then((response) => {
    console.log(response.data.data.image_original_url);
    this.setState({
      currentGif: response.data.data.image_original_url
    })
  })
  .catch((err) => {
      console.error(err);
    })
}



  render () {
    return (
      <div>
        <h1>Welcome to Gif Generator! Click the button below to get a random gif from the internets :3</h1>
        <button onClick={this.getaGif}>Get a gif!</button>
        <RenderGif currentGif={this.state.currentGif}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
