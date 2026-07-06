import React from 'react'
import { ArrowRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

function JoinNow() {
  return (
    <button
      className="
        w-[149px]
        h-[50px]
        bg-[#FA2A20]
        px-[23px]
        py-[14px]
        flex
        items-center
        justify-center
        gap-[10px]
        transition
        hover:bg-[#e32219]
      "
    >

      <FaInstagram
        className="text-white w-[15px] h-[16px] shrink-0"
      />

      
      <span
        className="
          text-white
          uppercase
          text-[15px]
          font-medium
          leading-none
          whitespace-nowrap
        "
        style={{ fontFamily: "Oswald" }}
      >
        JOIN NOW
      </span>

    
      <ArrowRight
        className="
          text-white
          w-[15px]
          h-[10px]
          stroke-[1.6]
          shrink-0
        "
      />
    </button>
  )
}

export default JoinNow
