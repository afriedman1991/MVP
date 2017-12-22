import React from 'react'

const RenderGif = (props) => {
  return (
    <div>
      <img src={props.currentGif}/>
    </div>
  )
}

export default RenderGif;
