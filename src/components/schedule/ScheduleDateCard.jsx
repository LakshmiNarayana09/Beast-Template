import { ChevronLeft, ChevronRight } from "lucide-react";

function ScheduleDateCard() {
  return (
    <div className="flex h-[240px] w-full max-w-[280px] flex-col justify-between bg-[#FA2A20] p-4 lg:h-[280px] lg:w-[280px] lg:p-5">
      <div className="text-right">
        <h2
          className="text-[24px] text-white lg:text-[28px]"
          style={{ fontFamily: "Oswald" }}
        >
          24TH - 30TH
        </h2>

        <h3
          className="text-[18px] text-white lg:text-[22px]"
          style={{ fontFamily: "Oswald" }}
        >
          NOVEMBER 2019
        </h3>
      </div>

      <div className="flex justify-end gap-3 lg:gap-4">
        <ChevronLeft className="cursor-pointer text-white" />
        <ChevronRight className="cursor-pointer text-white" />
      </div>
    </div>
  );
}

export default ScheduleDateCard;