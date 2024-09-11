import Hero from "@/app/components/home/hero/Hero";
import Services from "@/app/components/home/services/Services";
import About from "@/app/components/home/about/About";
import Technologies from "@/app/components/home/technologies/Technologies";
import OurProjects from "@/app/components/home/ourProjects/OurProjects";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Technologies />
      <OurProjects />
    </main>
  );
};

export default HomePage;
