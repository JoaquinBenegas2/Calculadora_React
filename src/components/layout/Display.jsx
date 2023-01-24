import React from 'react'

import "./Display.css"

const Display = ({ input, history }) => {
 

  return (
    <div className='input-container'>
      <div className='history'>{history}</div>
      <div className='input'>{input}</div>
    </div>
  )
}

export default Display