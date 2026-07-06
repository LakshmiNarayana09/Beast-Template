import React from 'react'
import { Element } from "react-scroll";
import SendMessage from '../buttons/SendMessage';

function Contact() {
  return (
    <Element name="contact">
      <section className="mb-[50px] w-full bg-white">
        <div className="mx-auto flex max-w-[1441px] flex-col gap-10 px-5 py-12 sm:px-8 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:px-[112px]">
          <div className="w-full lg:w-[608.5px]">
            <p className="font-raleway text-[14px] font-medium uppercase text-[#FA2A20] lg:text-[15px]">
              Contact Us
            </p>

            <h2 className="mt-6 font-oswald text-[30px] font-semibold uppercase leading-[42px] text-[#231815] lg:mt-[30px] lg:text-[36px] lg:leading-[50px]">
              GET IN TOUCH
              <br />
              <span className="text-[#FA2A20]">REACH OUT TO US</span>
            </h2>
          </div>

          <form className="flex w-full flex-col gap-8 lg:w-[608.5px] lg:gap-12">
            <div className="space-y-6 lg:space-y-[25px]">
              <div>
                <label className="mb-2 block font-oswald text-[15px] font-medium text-[#606060] lg:text-[16px]">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border-b border-[#D9D9D9] pb-2 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-oswald text-[15px] font-medium text-[#606060] lg:text-[16px]">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full border-b border-[#D9D9D9] pb-2 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-oswald text-[15px] font-medium text-[#606060] lg:text-[16px]">
                  MESSAGE
                </label>
                <textarea
                  rows={2}
                  className="w-full resize-none border-b border-[#D9D9D9] outline-none"
                />
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <SendMessage />
            </div>
          </form>
        </div>
      </section>
    </Element>
  )
}

export default Contact
