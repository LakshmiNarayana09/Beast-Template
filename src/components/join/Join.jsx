import React from 'react'
import { Element } from "react-scroll";
import PlanCard from './PlanCard';
import plans from '../data/plans.js';
import EnrollNow from '../buttons/EnrollNow';


function Join() {
  return (
    <Element name="join">
      <section className="px-5 py-12 lg:px-[112px] lg:py-20">
        <div className="text-center">
          <h2
            className="text-[30px] lg:text-[36px] text-[#FA2A20]"
            style={{ fontFamily: "Oswald" }}
          >
            JOIN NOW
          </h2>

          <p
            className="mt-4 text-[14px] lg:text-[15px] text-[#4C4C4C]"
            style={{ fontFamily: "Raleway" }}
          >
            JOIN & BE ONE OF US
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-0">
          {plans.map((plan) => (
            <PlanCard key={plan.title} {...plan} />
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:justify-start">
          <EnrollNow />
        </div>
      </section>
    </Element>
  )
}

export default Join
