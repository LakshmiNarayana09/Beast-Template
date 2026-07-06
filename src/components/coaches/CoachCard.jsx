import React from "react";
import { Link } from "react-router-dom";

function CoachCard({ id, image, name }) {
  return (
    <Link
      to={`/coach/${id}`}
      className="mx-auto block w-fit"
    >
      <div className="h-[340px] w-[280px] cursor-pointer overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  );
}

export default CoachCard;
