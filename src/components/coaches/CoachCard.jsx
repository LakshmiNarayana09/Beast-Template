import React from 'react'
import { Link } from 'react-router-dom';

function CoachCard({ id, image, name }) {
  return (
    <Link to={`/coach/${id}`}>
      <div className="w-[280px] h-[340px] overflow-hidden cursor-pointer group">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  )
}

export default CoachCard
