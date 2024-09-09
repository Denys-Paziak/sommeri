"use client";

import Header from "@/app/components/header/Header";
import Hero from "@/app/components/home/hero/Hero";
import Services from "@/app/components/home/services/Services";
import About from "@/app/components/home/about/About";
import Technologies from "@/app/components/home/technologies/Technologies";
import OurProjects from "@/app/components/home/ourProjects/OurProjects";

// Import with next's dynamic import
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <AnimatedCursor
        color={"255, 255, 255"}
        outerSize={50}
        innerSize={8}
        innerStyle={{
          backgroundColor: "rgb(0, 0, 0)",
        }}
        outerScale={2}
        outerAlpha={1}
        outerStyle={{
          mixBlendMode: "difference",
        }}
      />
      <Header />
      <Hero />
      <Services />
      <About />
      <Technologies />
      <OurProjects />
    </div>
  );
}
