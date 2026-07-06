import React from 'react'

function ScheduleCard({ image, day, workouts }) {
  return (
    <div className="relative w-[280px] h-[280px] overflow-hidden">

      <img
        src={image}
        alt={day}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-5 flex flex-col justify-between">

        <h3
          className="text-white text-[18px]"
          style={{ fontFamily: "Oswald" }}
        >
          {day}
        </h3>

        <div>
          {workouts.map((item) => (
            <p
              key={item}
              className="text-white uppercase text-[16px]"
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
