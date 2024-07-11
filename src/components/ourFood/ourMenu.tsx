import Image from "next/image";
import React from "react";

function OurMenu() {
  return (
    <div className="bg-[#0C0B08]">
      <div className="flex justify-center text-[#DCCA87] ">
        <div className="flex flex-col pb-9 pt-5">
          <h1 className="text-2xl md:text-4xl">Our Menu</h1>
          <Image
            src="/assets/images/spoon.png"
            alt="bg-pic"
            width={40}
            height={40}
            className="mt-3"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-20 pb-12">
        <div className="w-full flex flex-col gap-y-4 md:flex-row items-center  gap-x-6 px-12">
          <div className="w-full md:w-1/2 flex flex-col gap-y-6 justify-center items-center">
            <h1 className="text-2xl md:text-3xl w-[70%] text-[#DCCA87] text-center">
              AATHI SUVAI CLASSIC MUHURTHAM VEG
            </h1>
            <p className="text-center text-white">
              Celebrate your special day with our Classic Muhurtham catering
              package, featuring a curated selection of authentic Sri Lankan and
              South Indian dishes. From aromatic rice and flavorful curries to
              delicate sweets, our menu honors tradition and delights your
              guests.
            </p>
            <button className="px-4 py-2 rounded-md text-[#DCCA87] border-2 border-[#DCCA87]">
              View Menu
            </button>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-y-6 h-[50vh] md:h-[70vh]">
            <Image
              src="/assets/images/our-menu-1.jpg"
              alt="bg-pic"
              width={640}
              height={440}
              className="mt-3 w-full h-full"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-4 md:flex-row items-center gap-x-6 px-12 ">
          <div className="w-full md:w-1/2 flex flex-col gap-y-6 h-[50vh] md:h-[70vh]">
            <Image
              src="/assets/images/our-menu-2.jpg"
              alt="bg-pic"
              width={640}
              height={440}
              className="mt-3 w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-y-6 justify-center items-center">
            <h1 className="text-2xl md:text-3xl w-[70%] text-[#DCCA87] text-center">
              AATHI SUVAI RAJA MUHURTHAM VEG
            </h1>
            <p className="text-center text-white">
              Aathi Suvai Raja Muhurtham, a royal feast crafted to elevate your
              special occasions to new heights. Delight in an exquisite blend of
              Sri Lankan and South Indian flavors, featuring a lavish spread of
              authentic dishes that celebrate tradition with every bite. Perfect
              for weddings and grand celebrations, our catering promises an
              unforgettable culinary experience that honors the essence of your
              cherished moments.
            </p>
            <button className="px-4 py-2 rounded-md text-[#DCCA87] border-2 border-[#DCCA87]">
              View Menu
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-4 md:flex-row items-center gap-x-6 px-12">
          <div className="w-full md:w-1/2 flex flex-col gap-y-6 justify-center items-center">
            <h1 className="text-2xl md:text-3xl w-[70%] text-[#DCCA87] text-center">
              SOUTH INDIAN MUHURTHAM VEG
            </h1>
            <p className="text-center text-white">
              Elevate your special occasion with our South Indian Muhurtham
              catering package, offering a delightful array of traditional South
              Indian dishes. Enjoy aromatic rice, rich curries, and exquisite
              sweets, all crafted to celebrate your joyous moments with
              authenticity and flavor.
            </p>
            <button className="px-4 py-2 rounded-md text-[#DCCA87] border-2 border-[#DCCA87]">
              View Menu
            </button>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-y-6 h-[50vh] md:h-[70vh]">
            <Image
              src="/assets/images/our-menu-3.jpg"
              alt="bg-pic"
              width={640}
              height={440}
              className="mt-3 w-full h-full"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-4 md:flex-row items-center gap-x-6 px-12 ">
          <div className="w-full md:w-1/2 flex flex-col gap-y-6 h-[50vh] md:h-[70vh]">
            <Image
              src="/assets/images/our-menu-4.jpg"
              alt="bg-pic"
              width={640}
              height={440}
              className="mt-3 w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-y-6 justify-center items-center">
            <h1 className="text-2xl md:text-3xl w-[70%] text-[#DCCA87] text-center">
              AATHI SUVAI CLASSIC PADAYAL NON-VEG
            </h1>
            <p className="text-center text-white">
              Indulge in the rich flavors of our Aathi Suvai Classic Padayal Non
              Veg catering, where tradition meets culinary excellence.
              Experience a feast of tender meats and aromatic spices,
              meticulously prepared to perfection. Ideal for weddings,
              celebrations, and corporate events, our menu promises to elevate
              your dining experience with every bite.
            </p>
            <button className="px-4 py-2 rounded-md text-[#DCCA87] border-2 border-[#DCCA87]">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMenu;
