import { ArrowRight } from "lucide-react";
import BMIInput from "../bmi/BIMInput";
import CalculateBmi from '../buttons/CalculateBmi'

function BMIForm() {
  return (
    <div className="w-full max-w-[430px] bg-white lg:w-[430px]">
      <div className="px-5 pt-6 sm:px-8 sm:pt-8 lg:px-10 lg:pt-10">
        <h2
          className="text-center text-[30px] font-semibold uppercase text-[#FA2A20] lg:text-[36px]"
          style={{ fontFamily: "Oswald" }}
        >
          Calculate Your
        </h2>

        <p
          className="mt-4 text-center text-[14px] text-[#4C4C4C] lg:text-[15px]"
          style={{ fontFamily: "Raleway" }}
        >
          BODY MASS INDEX
        </p>

        <div className="mt-8 mb-8 space-y-6 lg:mt-12 lg:space-y-8">
          <BMIInput label="HEIGHT" unit="Cm" />

          <BMIInput label="WEIGHT" unit="Kg" />

          <BMIInput label="AGE" unit="Years" />

          <BMIInput label="GENDER" />
        </div>
      </div>

      <CalculateBmi />
    </div>
  );
}

export default BMIForm;