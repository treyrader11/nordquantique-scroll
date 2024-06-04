"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";
import HeroImage from "@/components/HeroImage";
import About from "@/components/About";
import AboutImage from "@/components/AboutImage";
import Footer from "@/components/Footer";

export default function Home() {
  const container = useRef();

  return (
    <main ref={container}>
      <Hero className="hero" />
      <HeroImage className="hero-img" />
      <About className="about" />
      <AboutImage className={cn("about-img")} />
      <Footer className="footer" />
    </main>
  );
}
