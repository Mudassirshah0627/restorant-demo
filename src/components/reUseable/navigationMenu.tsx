import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

function NavigationMenu({ setMenu }) {
  function closeMenu() {
    setMenu(false);
  }
  return (
    <div className="w-1/2 md:w-[25vw] h-[60vh] border-2 border-[#DCCA87] text-[#DCCA87] absolute top-4 right-8 bg-black ">
      <div className="relative">
        <h1 className="text-center text-3xl py-8">Navigate</h1>
        <div className="px-6 flex flex-col gap-y-3">
          <Link href="/" className="text-xl font-light" onClick={closeMenu}>
            Home
          </Link>
          <Link
            href="/our-food"
            className="text-xl font-light"
            onClick={closeMenu}
          >
            Our Food
          </Link>
        </div>
        <div
          className="absolute top-4 right-4 text-xl text-white cursor-pointer"
          onClick={closeMenu}
        >
          <RxCross2 />
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
