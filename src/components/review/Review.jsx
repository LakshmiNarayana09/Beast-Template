import React from 'react'
import { Element } from "react-scroll";
import ReviewCard from './ReviewCard';
import reviews from '../data/reviews.js';

function Review() {
  return (
    <Element name="reviews">
      <section className="px-5 py-12 lg:px-[112px] lg:py-20">
        <div className="text-center">
          <h2
            className="text-[30px] uppercase text-[#FA2A20] lg:text-[36px]"
            style={{ fontFamily: "Oswald" }}
          >
            Review
          </h2>

          <p
            className="mt-4 text-[14px] text-[#4C4C4C] lg:text-[15px]"
            style={{ fontFamily: "Raleway" }}
          >
            READ WHAT PEOPLE SAYS
          </p>
        </div>

        <div className="mt-12 space-y-10 lg:mt-20 lg:space-y-20">
          {reviews.map((item) => (
            <ReviewCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </Element>
  )
}

export default Review
