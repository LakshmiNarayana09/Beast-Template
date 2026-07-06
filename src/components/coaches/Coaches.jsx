import React from 'react'
import { Element } from "react-scroll";
import CoachCard from './CoachCard';
import coaches from '../data/coaches.js';


function Coaches() {
  return (
    <Element name="coaches">
      <section className="bg-[#212529] px-5 py-12 sm:px-8 md:px-12 lg:px-[112px] lg:py-[120px]">
        <div className="mx-auto max-w-[1216px]">
          <div className="text-center">
            <h2
              className="text-[30px] font-medium uppercase text-[#FA2A20] lg:text-[36px]"
              style={{ fontFamily: "Oswald" }}
            >
              COACHES
            </h2>

            <p
              className="mt-4 text-[14px] font-semibold uppercase text-white lg:mt-[15px] lg:text-[15px]"
              style={{ fontFamily: "Raleway" }}
            >
              OUR TRAINING FORCE
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-20 lg:grid-cols-4 lg:gap-8">
            {coaches.map((coach) => (
              <CoachCard
                key={coach.id}
                id={coach.id}
                image={coach.image}
                name={coach.name}
              />
            ))}
          </div>
        </div>
      </section>
    </Element>
  )
}

export default Coaches
