import Image from "next/image";
import React from "react";

function OurClient() {
  return (
    <div className="bg-[#0C0B08] text-[#DCCA87] pb-12">
      <div className="flex justify-center flex-col items-center text-[#DCCA87] ">
        <div className="flex flex-col pb-2 pt-5">
          <h1 className="text-sm">Testmonial</h1>
          <Image
            src="/assets/images/spoon.png"
            alt="bg-pic"
            width={40}
            height={40}
            className="mt-2"
          />
        </div>
        <h1 className="text-2xl md:text-4xl">Happy Customers</h1>
      </div>
      <div className="flex justify-center py-16 mt-12">
        <p className="text-white px-6 md:w-1/2 text-center ">
          We couldn't have asked for a better catering service for our wedding
          reception. The Srilankan and South Indian dishes were absolutely
          delicious and beautifully presented. Our guests couldn't stop raving
          about the food. Aathi Suvai made our special day even more memorable
          with their impeccable service and mouth-watering cuisine. Highly
          recommend!
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm">Raj and Hema</p>
        <p className="text-sm">Wedding Reception</p>
      </div>
    </div>
  );
}

export default OurClient;
