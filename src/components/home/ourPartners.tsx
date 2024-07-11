import Image from "next/image";
import { LiaUtensilSpoonSolid } from "react-icons/lia";

function OurPatners() {
  return (
    <div className="bg-[#111111] pb-12 py-8">
      <div className="flex justify-center text-[#DCCA87] ">
        <div className="flex flex-col pb-9 pt-5">
          <h1 className="text-2xl md:text-4xl">Our Partner Venues</h1>
          <Image
            src="/assets/images/spoon.png"
            alt="bg-pic"
            width={40}
            height={40}
            className="mt-3"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 px-12 md:px-40 gap-6">
        <div className=" h-[50vh] ">
          <Image
            src="/assets/images/venu-1.png"
            alt="bg-pic"
            width={360}
            height={160}
            className="w-full h-full"
          />
        </div>
        <div className=" h-[50vh]  relative ">
          <Image
            src="/assets/images/res.avif"
            alt="bg-pic"
            width={160}
            height={160}
            className="w-full h-full blur-[4px] "
          />
          <div className="w-full">
            <p className="font-semibold  text-white text-center absolute top-[40%] left-[30%] text-2xl transform -rotate-[25deg]">
              Coming Soon
            </p>
          </div>
        </div>
        <div className=" h-[50vh] ">
          <Image
            src="/assets/images/venu-3.png"
            alt="bg-pic"
            width={160}
            height={160}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default OurPatners;
