import React from 'react'
import { ArrowRight } from "lucide-react";

function EnrollNow() {
  return (
    <button
      className="
        w-[406.33px]
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
        ENROLL NOW
      </span>

      <ArrowRight
        className="text-white w-[20px] h-[20px] stroke-[1.6]"
      />
    </button>
  )
}

export default EnrollNow
