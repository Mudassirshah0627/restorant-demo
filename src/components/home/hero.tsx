import { memo } from "react";
import Header from "../reUseable/header";

const Hero = memo(function Hero({ title }) {
  return (
    <div className="h-screen relative w-full hero bg-no-repeat bg-cover bg-center z-[99]">
      <div className="bg-[black] absolute h-full w-full z-[-9] opacity-60"></div>
      <Header />

      {/* hero section  */}
      <div className="flex flex-col justify-center  w-full  items-center px-[16%] h-[50vh]">
        <h1 className="text-2xl md:text-5xl mb-8 text-[#DCCA87] ">{title}</h1>
        <button className="bg-white py-2 px-4 rounded-sm">Book Now</button>
      </div>
    </div>
  );
});

export default Hero;
