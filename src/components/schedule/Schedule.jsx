import React from 'react'
import { Element } from "react-scroll";
import ScheduleDateCard from '../schedule/ScheduleDateCard';
import ScheduleCard from '../schedule/ScheduleCard';
import schedule from '../data/scheduleData.js';

function Schedule() {
  return (
    <Element name="schedule">
      <section className="px-5 py-12 lg:px-[112px] lg:py-20">
        <div className="mx-auto max-w-[1216px] text-center">
          <h2
            className="text-[30px] uppercase text-[#FA2A20] lg:text-[36px]"
            style={{ fontFamily: "Oswald" }}
          >
            Schedule
          </h2>

          <p
            className="mt-4 text-[14px] text-[#4C4C4C] lg:text-[15px]"
            style={{ fontFamily: "Raleway" }}
          >
            KEEP UP WITH THE SCHEDULE TO STAY FIT
          </p>

          <p
            className="mt-6 text-[14px] leading-7 text-[#606060] lg:mt-8 lg:text-[15px]"
            style={{ fontFamily: "Raleway" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          <ScheduleDateCard />

          {schedule.slice(0, 3).map((item) => (
            <ScheduleCard key={item.day} {...item} />
          ))}

          {schedule.slice(3).map((item) => (
            <ScheduleCard key={item.day} {...item} />
          ))}
        </div>
      </section>
    </Element>
  )
}

export default Schedule
