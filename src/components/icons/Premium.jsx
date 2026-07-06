import React from 'react'
import premium from '../../assets/icons/premium.svg';

function Premium() {
  return (
    <div className="w-20 h-20 flex items-center justify-center">
      <img
        src={premium}
        alt="Premium"
        className="w-full h-full object-contain"
      />
    </div>
  )
}

export default Premium
