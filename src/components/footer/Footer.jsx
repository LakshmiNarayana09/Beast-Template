import React from 'react'
import { Element } from "react-scroll";
import White from '../logos/White';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";

function Footer() {
  return (
    <Element name="footer">
      <footer className="w-full bg-[#121212] py-[30px]">
        <div className="mx-auto max-w-[1441px] px-5 sm:px-8 md:px-12 lg:px-[112px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <White />

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-5">
              <p className="font-raleway text-[14px] font-semibold uppercase text-white lg:text-[16px]">
                SUBSCRIBE TO OUR NEWSLETTER
              </p>

              <div className="flex h-[60px] w-full items-center justify-between bg-[#212529] px-[10px] lg:h-[74px] lg:w-[382px]">
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="w-full bg-transparent font-oswald text-[14px] font-semibold uppercase text-white placeholder:text-white outline-none lg:text-[16px]"
                />

                <button>
                  <ArrowRight className="text-white" size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="my-10 border-t border-white/10 lg:my-[58px]"></div>

          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <p className="font-raleway text-[14px] font-medium text-white lg:text-[16px]">
              © Beast 2019 All Rights reserved.
            </p>

            <div className="flex items-center gap-[15px]">
              <a
                href="#"
                className="font-raleway text-[12px] font-bold uppercase text-white"
              >
                TERMS & CONDITIONS
              </a>

              <span className="h-4 w-px bg-white/30"></span>

              <a
                href="#"
                className="font-raleway text-[12px] font-bold uppercase text-white"
              >
                PRIVACY POLICY
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex h-6 w-6 items-center justify-center bg-white text-black"
              >
                <FaFacebookF size={12} />
              </a>

              <a
                href="#"
                className="flex h-6 w-6 items-center justify-center bg-white text-black"
              >
                <FaXTwitter size={12} />
              </a>

              <a
                href="#"
                className="flex h-6 w-6 items-center justify-center bg-white text-black"
              >
                <FaInstagram size={12} />
              </a>

              <a
                href="#"
                className="flex h-6 w-6 items-center justify-center bg-white text-black"
              >
                <FaLinkedinIn size={12} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Element>

  )
}

export default Footer
