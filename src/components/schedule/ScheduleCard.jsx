import React from 'react'

function ScheduleCard({ image, day, workouts }) {
  return (
    <div className="relative h-[240px] w-full max-w-[280px] overflow-hidden lg:h-[280px] lg:w-[280px]">
      <img
        src={image}
        alt={day}
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-4 flex flex-col justify-between lg:inset-5">
        <h3
          className="text-[16px] text-white lg:text-[18px]"
          style={{ fontFamily: "Oswald" }}
        >
          {day}
        </h3>

        <div>
          {workouts.map((item) => (
            <p
              key={item}
              className="text-[14px] uppercase text-white lg:text-[16px]"
              style={{ fontFamily: "Oswald" }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScheduleCard
