import React from 'react';
import RenderGif from './RenderGif.jsx';
const ulStyle = {
  "listStyleType": "none"
}
const GifGallery = (props) => {
  return (
    <ul style={ulStyle}>
        {props.Gifs.map((gif, ind) => {
          return <li key={ind}><img src={`${gif}`} key={ind}/><button onClick={() => props.deleteAGif({'gif': gif})}>delete</button></li>
        })}
    </ul>
  )
}
export default GifGallery
