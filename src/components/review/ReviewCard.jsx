import { ArrowLeft, ArrowRight } from "lucide-react";
import logo from '../../assets/review/icon.png';

function ReviewCard({ image, name, review }) {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[92px]">
  <div className="relative h-[250px] w-full lg:h-[400px] lg:w-[562px]">
    <img
      src={image}
      alt={name}
      className="h-full w-full object-cover"
    />

    <div className="absolute right-4 -bottom-6 sm:right-6 sm:-bottom-8 lg:-right-14 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2">
      <img
        src={logo}
        alt="Logo"
        className="w-16 sm:w-20 lg:w-auto"
      />
    </div>
  </div>

  <div className="w-full lg:w-[562px] flex flex-col gap-6 lg:gap-[25px]">
    <p
      className="text-[15px] leading-7 text-[#606060]"
      style={{ fontFamily: "Raleway" }}
    >
      {review}
    </p>

    <h3
      className="text-[24px]"
      style={{ fontFamily: "Oswald" }}
    >
      {name}
    </h3>

    <div className="flex gap-4">
      <ArrowLeft className="cursor-pointer" />
      <ArrowRight className="cursor-pointer" />
    </div>
  </div>
</div>
  );
}

export default ReviewCard;