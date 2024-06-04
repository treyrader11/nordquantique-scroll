"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import BlockRows from "@/components/BlockRows";
import { data } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  const container = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const footer = document.querySelector(".footer");
    const lastCard = document.querySelector(".card.scroll");
    const pinnedSections = gsap.utils.toArray(".pinned");

    pinnedSections.forEach((section, index, sections) => {
      let img = section.querySelector(".img");

      let nextSection = sections[index + 1] || lastCard;
      let endScalePoint = `top+=${
        nextSection.offsetTop - section.offsetTop
      } top`;

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end:
            index === sections.length
              ? `+=${lastCard.offsetHeight / 2}`
              : footer.offsetTop - window.innerHeight,
          pin: true,
          pinSpacing: false,
          scrub: 1,
        },
      });

      gsap.fromTo(
        img,
        { scale: 1 },
        {
          scale: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: endScalePoint,
            scrub: 1,
          },
        }
      );
    });

    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "+=400vh",
      scrub: 1,
      onUpdate: (self) => {
        let opacityProgress = self.progress;
        let heroH1 = document.querySelector(".hero h1");
        heroH1.style.opacity = 1 - opacityProgress;
      },
    });
  }, []);

  return (
    <main className="container">
      <section className={cn("hero bg-[#757637] relative w-full min-h-screen")}>
        <h1>Section 1</h1>
      </section>
      <section className={cn("hero-img relative w-full min-h-screen")}>
        <Image
          fill
          className={cn("absolute size-full object-cover z-[-1]")}
          src="/images/cactus.jpg"
          alt=""
        />
        <BlockRows />
      </section>
      <section
        className={cn("about bg-[#375955] relative w-full min-h-screen")}
      >
        <h1>Section 2</h1>
      </section>
      <section className={cn("about-img relative w-full min-h-screen")}>
        <Image
          fill
          className={cn("absolute size-full object-cover z-[-1]")}
          src="/images/rock.jpg"
          alt=""
        />
        <BlockRows />
      </section>
      <section className={cn("footer relative w-full min-h-screen")}>
        <h1>Section 3</h1>
      </section>
    </main>
  );
}
