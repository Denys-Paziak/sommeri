"use client";

import Header from "@/app/components/header/Header";
import HomePage from "@/app/components/home/HomePage";

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
      <HomePage />
    </div>
  );
}
