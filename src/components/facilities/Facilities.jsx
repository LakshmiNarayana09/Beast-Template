import React from 'react'
import { Element } from "react-scroll";
import FacilitiesCards from './FacilitiesCards';
import cardio from '../../assets/facilities/cardio.png';
import exercise from '../../assets/facilities/exercise.png';
import weight from '../../assets/facilities/weight.png';
import functional from '../../assets/facilities/functional.png';

const facilities = [
  {
    title: "CARDIO ZONE",
    image: cardio,
  },
  {
    title: "EXERCISE STUDIO",
    image: exercise,
  },
  {
    title: "WEIGHT TRAINING",
    image: weight,
  },
  {
    title: "FUNCTIONAL ZONE",
    image: functional,
  },
];


function Facilities() {
  return (
    <Element name="facilities">
      <section className="px-5 py-12 lg:px-[112px] lg:py-20">
        <div className="mx-auto max-w-[1217px] text-center">
          <h2
            className="text-[30px] font-medium uppercase text-[#FA2A20] lg:text-[36px]"
            style={{ fontFamily: "Oswald" }}
          >
            Facilities
          </h2>

          <p
            className="mt-4 text-[14px] font-semibold uppercase text-[#4C4C4C] lg:text-[15px]"
            style={{ fontFamily: "Raleway" }}
          >
            HOW IT FEELS TO BE WITH US
          </p>

          <p
            className="mt-6 text-[14px] leading-7 text-[#606060] lg:mt-8 lg:text-[15px]"
            style={{ fontFamily: "Raleway" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse laborum.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 sm:grid sm:grid-cols-2 sm:gap-8 lg:mt-20 lg:flex lg:flex-row lg:justify-between lg:gap-0">
          {facilities.map((facility) => (
            <FacilitiesCards
              key={facility.title}
              title={facility.title}
              image={facility.image}
            />
          ))}
        </div>
      </section>
    </Element>
  )
}

export default Facilities
