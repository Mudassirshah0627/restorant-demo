import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#000000] text-white flex justify-center py-12 flex-col items-center gap-y-6">
      <div className="">
        <Image
          src="/assets/images/logo.svg"
          width={80}
          height={80}
          alt="logo"
        />
      </div>
      <div className="flex items-center gap-x-12 text-xl">
        <FaFacebook />
        <FaInstagram />
        <FaYoutube />
      </div>
      <h1 className="text-[#646262] text-sm">
        © 2024 Mudassir shah, Inc. All rights reserved.
      </h1>
    </div>
  );
}

export default Footer;
