import React from 'react';
import RenderGif from './RenderGif.jsx';
const ulStyle = {
  "listStyleType": "none"
}
const GifGallery = (props) => {
  return (
    <ul style={ulStyle}>
        {props.Gifs.map((gif, ind) => {
          console.log(gif);
          return <li key={ind}><img src={`${gif}`} key={ind}/></li>
        })}
    </ul>
  )
}
export default GifGallery
