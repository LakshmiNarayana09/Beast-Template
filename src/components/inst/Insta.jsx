import React from 'react'
import Follow from '../buttons/Follow.jsx'
import backgroundImage from '../../assets/inst/background-img.png'

function Insta({coach}) {
  return (
        <section
      className="bg-cover bg-center py-12 lg:py-[120px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[112px]">
        <div className="flex flex-col items-center gap-4 lg:gap-[15px]">
          <h2 className="font-oswald text-[30px] font-medium uppercase text-[#FA2A20] lg:text-[36px]">
            INSTAGRAM
          </h2>

          <p className="text-center font-raleway text-[14px] font-semibold uppercase text-white lg:text-[15px]">
            FOLLOW {coach.name.toUpperCase()} ON INSTAGRAM
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[60px] lg:grid-cols-4 lg:gap-8">
          {coach.instagramImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${coach.name} ${index + 1}`}
              className="h-[240px] w-full object-cover lg:h-[281px] lg:w-[280px]"
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:mt-[60px]">
          <Follow />
        </div>
      </div>
    </section>
  )
}

export default Insta

