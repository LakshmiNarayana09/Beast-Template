import React from 'react'

function BlogCard({ image, date, title, description }) {
  return (
    <div className="w-full max-w-[384px] flex flex-col gap-5 lg:w-[384px]">
      <div className="relative h-[220px] w-full overflow-hidden sm:h-[250px] lg:h-[276px] lg:w-[384px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />

        <div className="absolute top-4 right-4 bg-[#FA2A20] px-3 py-2 lg:top-5 lg:right-5 lg:px-4">
          <span
            className="text-[13px] uppercase text-white lg:text-sm"
            style={{ fontFamily: "Oswald" }}
          >
            {date}
          </span>
        </div>
      </div>

      <h3
        className="text-[15px] leading-7 text-[#200504] lg:text-[16px] lg:leading-[26px]"
        style={{ fontFamily: "Raleway", fontWeight: 500 }}
      >
        {title}
      </h3>

      <p
        className="text-[13px] leading-6 text-[#606060] lg:text-[14px] lg:leading-[26px]"
        style={{ fontFamily: "Raleway", fontWeight: 500 }}
      >
        {description}
      </p>
    </div>
  )
}

export default BlogCard
