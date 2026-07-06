import React from "react";

function Introduction({ description }) {
  return (
    <section className="w-full bg-white py-8 lg:py-[43px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[112px]">
        <div className="flex flex-col items-center gap-4 lg:gap-[15px]">
          <h2 className="font-oswald text-[30px] font-medium uppercase leading-none text-[#FA2A20] lg:text-[36px]">
            INTRODUCTION
          </h2>

          <p className="font-raleway text-[14px] font-semibold uppercase leading-none text-[#4C4C4C] lg:text-[15px]">
            READ BIOGRAPHY OF A COACH
          </p>

          <p className="max-w-[1216px] text-center font-raleway text-[14px] font-medium leading-7 text-[#606060] lg:text-[15px] lg:leading-[28px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;