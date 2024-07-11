import Image from "next/image";
import React from "react";

function Catering() {
  return (
    <div className="bg-[#0C0B08] py-32 relative">
      <h1 className="text-2xl text-center md:text-4xl px-6 md:px-[15%] mb-8 text-[#DCCA87] ">
        Welcome To Aathi Suvai Catering, Your Trusted Catering Partner
      </h1>

      <div className="w-full text-white text-center flex justify-center flex-col items-center">
        <p className="md:w-1/2 px-6">
          It all started on the Ist of April 2022 ... Aathi Suvai is a family
          owned business made up of only a passionate uncle, a kind-hearted
          auntie, dedicated nephews and the heart of every family, their
          children. A lot of us come from far away, leaving behind our loved
          ones and with the taste of our mother's food still lingering on our
          tongues. Here at Aathi Suvai every dish is infused with a deep sense
          of tradition and authenticity.
        </p>
        <p className="md:w-1/2 px-6 pt-6">
          Aathi Suvai is an authentic and traditional Sri Lankan and South
          Indian home-cooked food Catering Service. At Aathi Suvai we pass on
          the value of Food is Medicine to our future generation. With that
          being said our food is prepared with no colouring or preservatives
          while capturing its true taste and quality.
        </p>
        <p className="md:w-1/2 px-6">
          Our community means a lot to us as a family. Meeting and feeding
          people from different races, religion and nationalities is what makes
          a great and vibrant community. We are grateful to be a part of the
          community in Croydon. At Aathi Suvai we cater for all occasions.
        </p>
      </div>
      <div>
        <Image
          src="/assets/images/group-1.png"
          alt="bg-pic"
          width={160}
          height={160}
          className="absolute top-4 left-2"
        />
        <Image
          src="/assets/images/group-2.png"
          alt="bg-pic"
          width={160}
          height={160}
          className="absolute top-4 right-2"
        />
        <Image
          src="/assets/images/group-3.png"
          alt="bg-pic"
          width={160}
          height={160}
          className="absolute bottom-4 left-2"
        />
        <Image
          src="/assets/images/group-1.png"
          alt="bg-pic"
          width={160}
          height={160}
          className="absolute bottom-4 right-2"
        />
      </div>
    </div>
  );
}

export default Catering;
