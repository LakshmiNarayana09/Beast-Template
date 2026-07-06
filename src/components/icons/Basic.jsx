import React from 'react'
import basic from '../../assets/icons/basic.svg';

function Basic() {
  return (
    <div className="w-20 h-20 flex items-center justify-center">
      <img
        src={basic}
        alt="Basic"
        className="w-full h-full object-contain"
      />
    </div>
  )
}

export default Basic
