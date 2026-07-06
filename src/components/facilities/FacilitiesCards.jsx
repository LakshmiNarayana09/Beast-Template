import React from 'react'

function FacilitiesCards({ image, title }) {
  return (
    <div className="relative w-[280px] h-[280px] overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      
      <div className="absolute inset-0 bg-black/40"></div>

      
      <h3
        className="absolute bottom-4 left-4 text-white text-[18px] uppercase"
        style={{ fontFamily: "Oswald" }}
      >
        {title}
      </h3>
    </div>
  )
}

export default FacilitiesCards
