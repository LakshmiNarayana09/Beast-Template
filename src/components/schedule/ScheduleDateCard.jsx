import { ChevronLeft, ChevronRight } from "lucide-react";

function ScheduleDateCard() {
  return (
    <div className="w-[280px] h-[280px] bg-[#FA2A20] p-5 flex flex-col justify-between">

      <div className="text-right">
        <h2
          className="text-white text-[28px]"
          style={{ fontFamily: "Oswald" }}
        >
          24TH - 30TH
        </h2>

        <h3
          className="text-white text-[22px]"
          style={{ fontFamily: "Oswald" }}
        >
          NOVEMBER 2019
        </h3>
      </div>

      <div className="flex justify-end gap-4">
        <ChevronLeft className="text-white cursor-pointer" />
        <ChevronRight className="text-white cursor-pointer" />
      </div>

    </div>
  );
}

export default ScheduleDateCard;