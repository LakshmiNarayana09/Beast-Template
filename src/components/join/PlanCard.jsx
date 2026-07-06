import React from 'react'


function PlanCard({ title, Icon, features, price }) {
  return (
    <div className="w-full max-w-[406px] border border-gray-300 flex flex-col lg:w-[406px]">
      <div className="flex flex-1 flex-col items-center gap-6 px-5 py-6 sm:px-6 sm:py-8 lg:gap-[30px] lg:px-8 lg:py-[30px]">
        <h2
          className="text-[22px] uppercase text-[#FA2A20] lg:text-2xl"
          style={{ fontFamily: "Oswald" }}
        >
          {title}
        </h2>

        <Icon />

        <div className="flex flex-col gap-2 text-center">
          {features.map((feature) => (
            <p
              key={feature}
              className="text-[13px] uppercase lg:text-sm"
              style={{ fontFamily: "Oswald" }}
            >
              {feature}
            </p>
          ))}
        </div>

        <h3
          className="text-[28px] text-[#FA2A20] lg:text-[32px]"
          style={{ fontFamily: "Oswald" }}
        >
          {price}
        </h3>
      </div>
    </div>
  )
}

export default PlanCard
