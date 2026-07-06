import React from "react";
import { useParams } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import coaches from "../components/data/coaches.js";
import Navbar from "../components/navbar/Navbar.jsx";
import backgroundImage from "../assets/coach details/background-img.png";
import Introduction from "../components/introduction/Introduction.jsx";
import Skills from '../components/skills/Skills.jsx';
import Footer from "../components/footer/Footer.jsx";
import Insta from "../components/inst/Insta.jsx";

function CoachDetails() {
  const { id } = useParams();

  const coach = coaches.find((coach) => coach.id === Number(id));

  if (!coach) {
    return <h1>Coach Not Found</h1>;
  }

  return (
    <>
    
      <section className="relative mb-[50px]">
        <div
          className="relative min-h-[600px] bg-cover bg-center lg:min-h-[682px]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 pt-6 lg:pt-[30px]">
            <Navbar />

            <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5 pt-10 sm:px-8 md:px-12 lg:flex-row lg:items-center lg:gap-[30px] lg:px-[112px] lg:pt-12">
              <div className="flex h-[320px] w-full max-w-[530px] items-center justify-center border-[5px] border-[#FA2A20] sm:h-[420px] lg:h-[526px] lg:w-[530px]">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="w-full max-w-[530px] lg:w-[224px]">
                <h1 className="font-oswald text-[36px] font-semibold uppercase text-white sm:text-[44px] lg:text-[56px]">
                  {coach.name}
                </h1>

                <p className="mt-4 font-oswald text-[18px] font-semibold uppercase text-[#FA2A20] lg:mt-5 lg:text-[20px]">
                  {coach.role}
                </p>

                <div className="mt-8 space-y-5 text-white lg:mt-10 lg:space-y-6">
                  <p><span className="text-gray-300">AGE:</span> {coach.age}</p>
                  <p><span className="text-gray-300">EXPERIENCE:</span> {coach.experience}</p>
                  <p><span className="text-gray-300">PHONE:</span> {coach.phone}</p>
                  <p><span className="text-gray-300">EMAIL:</span> {coach.email}</p>
                </div>

                <div className="mt-10 flex gap-4 lg:mt-12">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-8 px-5 py-5 sm:gap-12 lg:gap-[150px]">
            <img
              src={coach.certifications.ifbb}
              alt="IFPASA"
              className="h-[45px] w-auto object-contain lg:h-[55px]"
            />

            <img
              src={coach.certifications.nasm}
              alt="NASM"
              className="h-[55px] w-auto object-contain lg:h-[70px]"
            />

            <img
              src={coach.certifications.ssa}
              alt="SSA"
              className="h-[40px] w-auto object-contain lg:h-[49px]"
            />
          </div>
        </div>
      </section>
      <Introduction description={coach.description} />
      <Skills
        skills={coach.skills}
        description={coach.description}
      />
      <Insta coach={coach} />
      <Footer />
    </>
  );
}

export default CoachDetails;