import Hero from "@/components/home/hero";
import CustomizableMenus from "@/components/ourFood/customizableMenus";
import OurMenu from "@/components/ourFood/ourMenu";
import React from "react";

function OurFood() {
  return (
    <div>
      <Hero
        title="Discover the Authentic Flavors of
Sri Lankan and South Indian Cuisine"
      />
      <CustomizableMenus />
      <OurMenu />
    </div>
  );
}

export default OurFood;
