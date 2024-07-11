"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function OurGallery() {
  const [autoplay, setAutoplay] = useState(true);
  const responsive = {
    superbLargeDesktop: {
      breakpoint: { max: 3000, min: 1236 },
      items: 4,
      partialVisibilityGutter: 20,
    },
    superLargeDesktop: {
      breakpoint: { max: 1236, min: 1024 },
      items: 4,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 768, min: 600 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoplay(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0C0B08]  py-14">
      <div className="flex justify-center text-[#DCCA87] flex-col items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-4xl  ">Our Gallery</h1>
          <Image
            src="/assets/images/spoon.png"
            alt="bg-pic"
            width={40}
            height={40}
            className="mt-3"
          />
        </div>
        <div className="flex justify-center text-center text-white mt-12 flex-col items-center gap-y-6 md:w-1/2 px-6">
          <p>
            Experience the rich flavors of Sri Lankan and South Indian cuisine
            with our meticulously crafted dishes, showcasing traditional recipes
            and vibrant spices. Let our gallery take you on a visual journey
            through our diverse and delectable menu offerings, perfect for any
            celebration or event.
          </p>
          <button className="bg-white text-black py-2 px-4 rounded-sm">
            View More
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-12 mt-12">
        <Carousel responsive={responsive} autoPlay={autoplay} infinite>
          <div className=" h-[60vh] mx-5">
            <Image
              src="/assets/images/our-gallery-scroll-1.jpeg"
              alt="bg-pic"
              width={160}
              height={160}
              className="w-full h-full"
            />
          </div>
          <div className=" h-[60vh] mx-5">
            <Image
              src="/assets/images/our-gallery-scroll-7.jpeg"
              alt="bg-pic"
              width={160}
              height={160}
              className="w-full h-full"
            />
          </div>
          <div className=" h-[60vh] mx-5">
            <Image
              src="/assets/images/our-gallery-scroll-1.jpeg"
              alt="bg-pic"
              width={160}
              height={160}
              className="w-full h-full"
            />
          </div>
          <div className=" h-[60vh] mx-5">
            <Image
              src="/assets/images/our-gallery-scroll-7.jpeg"
              alt="bg-pic"
              width={160}
              height={160}
              className="w-full h-full"
            />
          </div>
          <div className=" h-[60vh] mx-5">
            <Image
              src="/assets/images/our-gallery-scroll-1.jpeg"
              alt="bg-pic"
              width={160}
              height={160}
              className="w-full h-full"
            />
          </div>
          <div className=" h-[60vh] mx-5">
            <Image
              src="/assets/images/our-gallery-scroll-7.jpeg"
              alt="bg-pic"
              width={160}
              height={160}
              className="w-full h-full"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default OurGallery;
