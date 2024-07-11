import Image from "next/image";

function CustomizableMenus() {
  return (
    <div className="bg-[#0C0B08] w-full">
      <div className="flex justify-center flex-col items-center text-white">
        <p className="px-6 md:w-1/2 text-center py-12 text-[16px]">
          At Aathi Suvai, we take pride in bringing you the rich and diverse
          flavors of Sri Lankan and South Indian cuisine. Our expert chefs use
          traditional recipes and the freshest ingredients to create dishes that
          are not only delicious but also a true representation of our culinary
          heritage. Whether you're planning a wedding, a house party, or any
          special event, our menu offers something for everyone.
        </p>

        <h1 className="text-2xl text-center md:text-3xl px-[15%] mb-8 text-[#DCCA87] ">
          We Understand That Every Event Is Unique, And We Offer Customizable
          Menus To Suit Your Specific Needs And Preferences.{" "}
        </h1>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-[10%] pb-12 ">
        <div className="h-[60vh] border-2  relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50  hover:opacity-0"></div>

          <Image
            src="/assets/images/image-1.jpeg"
            alt="food"
            height={120}
            width={129}
            className="w-full h-full"
          />
        </div>
        <div className="h-[60vh] border-2  relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50  hover:opacity-0"></div>

          <Image
            src="/assets/images/image-2.jpg"
            alt="food"
            height={120}
            width={129}
            className="w-full h-full"
          />
        </div>
        <div className="h-[60vh] border-2  relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50  hover:opacity-0"></div>

          <Image
            src="/assets/images/image-3.jpeg"
            alt="food"
            height={120}
            width={129}
            className="w-full h-full"
          />
        </div>
        <div className="h-[60vh] border-2  relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50  hover:opacity-0"></div>

          <Image
            src="/assets/images/image-4.jpeg"
            alt="food"
            height={120}
            width={129}
            className="w-full h-full"
          />
        </div>
        <div className="h-[60vh] border-2  relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50  hover:opacity-0"></div>

          <Image
            src="/assets/images/image-5.jpeg"
            alt="food"
            height={120}
            width={129}
            className="w-full h-full"
          />
        </div>
        <div className="h-[60vh] border-2  relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50  hover:opacity-0"></div>

          <Image
            src="/assets/images/image-6.jpeg"
            alt="food"
            height={120}
            width={129}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomizableMenus;
