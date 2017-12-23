// module aliases
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RenderGif from './RenderGif.jsx';
import GetMyGifs from './GetMyGifs.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGif: null,
      allMyGifs: []
    }
    this.getaGif = this.getaGif.bind(this);
    this.saveaGif = this.saveaGif.bind(this);
    this.getMyGifs = this.getMyGifs.bind(this);
  }

getaGif() {
  axios.get('http://localhost:8000/genGif')
  .then((response) => {
    this.setState({
      currentGif: response.data.data.image_original_url,
      allMyGifs: []
    })
  })
  .catch((err) => {
      console.error(err);
    })
}

saveaGif() {
  axios.post('http://localhost:8000/saveGif', {
    link: this.state.currentGif
  })
  .then((response) => {
    console.log('Gif saved successfully!');
  })
  .catch((err) => {
    console.error(err);
  })
}

getMyGifs() {
  axios.get('http://localhost:8000/myGifs')
  .then((response) => {
    this.setState({
      currentGif: null,
      allMyGifs: Object.values(response.data)
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
        <button onClick={this.saveaGif}>Save this gif!</button>
        <button onClick={this.getMyGifs}>Recall my saved gifs!</button>
        <RenderGif currentGif={this.state.currentGif}/>
        <GetMyGifs Gifs={this.state.allMyGifs}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
