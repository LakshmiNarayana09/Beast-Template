import React from "react";

function Skills({ skills, description }) {
  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[112px]">
        <div className="flex flex-col items-center gap-4 lg:gap-[15px]">
          <h2 className="font-oswald text-[30px] font-medium uppercase text-[#FA2A20] lg:text-[36px]">
            SKILLS
          </h2>

          <p className="font-raleway text-[14px] font-semibold uppercase text-[#4C4C4C] lg:text-[15px]">
            SKILLSET OF OUR COACH
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-10 lg:mt-[60px] lg:flex-row lg:justify-between lg:gap-[36px]">
          <div className="w-full lg:w-[590px]">
            <p className="font-raleway text-[14px] font-medium leading-7 text-[#6A6A6A] lg:text-[15px] lg:leading-[28px]">
              {description}
            </p>
          </div>

          <div className="w-full space-y-8 lg:w-[590px] lg:space-y-10">
            {skills?.map((skill) => (
              <div key={skill.name}>
                <div className="mb-3 flex items-center justify-between lg:mb-[11px]">
                  <h3 className="font-oswald text-[18px] font-medium uppercase text-[#242424] lg:text-[20px]">
                    {skill.name}
                  </h3>

                  <span className="font-oswald text-[18px] font-medium text-[#242424] lg:text-[20px]">
                    {skill.percentage}%
                  </span>
                </div>

                <div className="h-[6px] w-full rounded-full bg-[#FFD6D3]">
                  <div
                    className="h-full rounded-full bg-[#FA2A20]"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;