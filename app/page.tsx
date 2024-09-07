'use client';

import Header from "@/app/components/header/Header"
import Hero from "@/app/components/hero/Hero"
import Services from "@/app/components/services/Services"

// Import with next's dynamic import
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
});



export default function Home() {
  return (
    <div>
        <AnimatedCursor
            color={"38, 150, 168"}
            outerSize={50}
            innerSize={8}
            outerScale={2}
            outerStyle={{
                mixBlendMode: 'exclusion',
            }}
        />
      <Header />
      <Hero />
      <Services />
    </div>
  );
}
