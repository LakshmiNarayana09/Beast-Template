import React from 'react'
import { ArrowRight } from "lucide-react";

function SendMessage() {
  return (
    <button
      className="
        w-[608.5px]
        h-[80px]
        bg-[#FA2A20]
        flex
        items-center
        justify-center
        gap-[16px]
        hover:bg-[#e32219]
        transition-colors
      "
    >
      <span
        className="
          text-white
          uppercase
          text-[18px]
          font-medium
          leading-none
        "
        style={{ fontFamily: "Oswald" }}
      >
        Send Message
      </span>

      <ArrowRight
        className="text-white w-[20px] h-[20px] stroke-[1.6]"
      />
    </button>
  )
}

export default SendMessage
