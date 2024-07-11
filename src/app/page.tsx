import Catering from "@/components/home/catering";
import Hero from "@/components/home/hero";
import OurClient from "@/components/home/ourClient";
import OurGallery from "@/components/home/ourGallery";
import OurPatners from "@/components/home/ourPartners";

function Home() {
  return (
    <div>
      <Hero
        title="Bringing Authentic Sri Lankan And
South Indian Flavors To Your Events"
      />
      <Catering />
      <OurPatners />
      <OurGallery />
      <OurClient />
    </div>
  );
}
export default Home;
