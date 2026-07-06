import React from "react";
import Navbar from '../navbar/Navbar.jsx';;
import backgroundImage from "../../assets/hero.png";
import { Play, ArrowRight, ArrowLeft } from "lucide-react";

function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex min-h-screen flex-col">
        
        <div className="pt-4">
          <Navbar />
        </div>

        
        <div className="mx-auto flex-1 w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28">
          <div className="mt-10 md:mt-16 lg:mt-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            
            <div className="flex flex-col items-center gap-6 lg:gap-[72px]">
              <button className="flex h-20 w-20 md:h-24 md:w-24 lg:h-[122px] lg:w-[122px] items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Play fill="white" className="ml-1 text-white" size={30} />
              </button>

              <p
                className="hidden lg:block rotate-180 font-oswald text-[15px] font-bold uppercase tracking-[0.05em] text-white"
                style={{ writingMode: "vertical-rl" }}
              >
                PLAY VIDEO
              </p>
            </div>

            {/* Text */}
            <div className="max-w-[582px] text-center lg:text-left">
              <p className="font-raleway text-base md:text-lg font-semibold uppercase text-[#FA2A20]">
                CARDIO
              </p>

              <h1 className="mt-2 font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold uppercase leading-tight text-white">
                LIVE IT
                <br />
                LIKE A ROCK!
              </h1>
            </div>
          </div>
        </div>

        
        <div className="w-full lg:w-[460px] bg-white self-center lg:self-start">
          <div className="flex h-20 lg:h-[96px] items-center px-5 md:px-10">
            <span className="font-oswald text-xl lg:text-2xl text-black">
              1
            </span>

            <span className="mx-3 text-[#999]">/</span>

            <span className="text-[#999]">4</span>

            <div className="mx-6 h-px flex-1 bg-[#D9D9D9]" />

            <button>
              <ArrowLeft size={18} className="text-[#BDBDBD]" />
            </button>

            <button className="ml-3">
              <ArrowRight size={18} className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
