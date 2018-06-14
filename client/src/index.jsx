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
    this.deleteAGif = this.deleteAGif.bind(this);
  }

  componentDidMount() {
    if (this.state.currentGif === null) {
      this.getMyGifs();
    }
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

deleteAGif(gif) {
  console.log('VALUE OF E.TARGET:', JSON.stringify(gif.gif));
  let config = {
    method: 'delete',
    url: 'http://localhost:8000/deleteGif',
    data: {
      link: gif.gif
    }
  }
  axios(config)
  .then((res) => {
    console.log(res.data);
    this.setState({
      currentGif: null,
      allMyGifs: res.data
    })
  });
}


  render () {
    return (
      <div className="overlay">
       <h1 className="mb-3">Welcome to Gif Generator! Click the button below to get a random gif from the internets :3</h1>
         <span className="input-group-btn">
             <button className="btn btn-secondary" type="button" onClick={this.getaGif}>Get a gif!</button>
             <button className="btn btn-secondary" type="button" onClick={this.saveaGif}>Save this gif!</button>
             <button className="btn btn-secondary" type="button" onClick={this.getMyGifs}>Recall my saved gifs!</button>
         </span>

         <RenderGif currentGif={this.state.currentGif}/>
         <GetMyGifs Gifs={this.state.allMyGifs} deleteAGif={this.deleteAGif}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
