import React from "react";
import { Element } from "react-scroll";
import aboutImage from "../../assets/about-img.png"; // Update the path if needed

function About() {
  return (
    <Element name="about">
      <section className="mb-[50px] flex w-full flex-col-reverse items-center gap-10 px-5 py-10 lg:min-h-[600px] lg:flex-row lg:justify-between lg:gap-[114px] lg:px-[112px]">
        <div className="w-full lg:w-[551px] flex flex-col gap-6 lg:gap-[30px]">
          <div className="flex flex-col gap-3 lg:gap-[15px]">
            <h2
              className="text-[30px] font-medium uppercase text-[#FA2A20] lg:text-[36px]"
              style={{ fontFamily: "Oswald" }}
            >
              About Us
            </h2>

            <p
              className="text-[14px] font-semibold uppercase text-[#4C4C4C] lg:text-[15px]"
              style={{ fontFamily: "Raleway" }}
            >
              KNOW MORE TO BE MORE WITH US
            </p>
          </div>

          <p
            className="text-[14px] leading-7 text-[#606060] lg:text-[15px]"
            style={{ fontFamily: "Raleway" }}
          >
            Lorem ipsum dolor sit amet consectetur. Non faucibus ut turpis
            magnis suscipit. Lorem etiam sem condimentum ultrices mauris lacus.
            Vel sed eget nulla sit sit. Vitae aliquet fames accumsan magna
            tempor et adipiscing aliquet arcu. Mauris nisi mauris dignissim
            morbi. Donec aliquam nisl eu pretium tortor enim nunc risus
            rhoncus. Urna a eu in nibh mi malesuada. Eget curabitur bibendum
            semper non eget. Nibh faucibus eget fermentum nibh mauris. Turpis
            eget in morbi nec. Sit at luctus ultricies tristique magna
            pulvinar. Semper scelerisque fringilla ut ornare cum nibh
            scelerisque. Vitae pharetra vitae in proin. Odio id arcu egestas
            eget imperdiet enim amet massa nulla.
          </p>
        </div>

        <div className="w-full lg:w-[551px] lg:h-[600px]">
          <img
            src={aboutImage}
            alt="About Us"
            className="h-[320px] w-full object-cover lg:h-full"
          />
        </div>
      </section>
    </Element>
  );
}

export default About;