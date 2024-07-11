"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import NavigationMenu from "./navigationMenu";

function Header() {
  const [menu, setMenu] = useState(false);

  function openMenu() {
    setMenu(true);
  }
  return (
    <div className="px-8 flex  justify-between py-6 items-center ">
      <div className="">
        <Image
          src="/assets/images/logo.svg"
          width={60}
          height={60}
          alt="logo"
        />
      </div>
      <div
        className="text-4xl font-semibold text-white  cursor-pointer"
        onClick={openMenu}
      >
        <IoIosMenu />
      </div>
      {menu && <NavigationMenu setMenu={setMenu} />}
    </div>
  );
}

export default Header;
