import React from 'react'

function cards({image,title}) {
  return (
    <div>
        <img src={image} alt="" />
        <h1> {title} </h1>
    </div>
  )
}

export default cards