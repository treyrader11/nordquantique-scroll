"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function BlockRows() {
  const rowsRef = useRef([]);

  useEffect(() => {
    const blockRows = rowsRef.current;
    blockRows.forEach((row) => {
      for (let i = 0; i < 16; i++) {
        const block = document.createElement("div");
        block.className = "block";
        row.appendChild(block);
      }
    });

    const blockContainers = document.querySelectorAll(".blocks-container");
    blockContainers.forEach((container) => {
      const rows = container.querySelectorAll(".blocks-row");
      const numRows = rows.length;

      rows.forEach((row, rowIndex) => {
        let blocks = Array.from(row.querySelectorAll(".block"));
        let isTop = container.classList.contains("top");

        let randomizedOrder = gsap.utils.shuffle(blocks.map((block, i) => i));

        ScrollTrigger.create({
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            let progress = self.progress;
            let rowDelay = 0.25 * (numRows - rowIndex - 1);
            let adjustedProgress = Math.max(
              0,
              Math.min(1, progress - rowDelay)
            );

            updateBlocksOpacity(
              blocks,
              randomizedOrder,
              isTop,
              adjustedProgress
            );
          },
        });
      });
    });

    const updateBlocksOpacity = (blocks, order, isTop, progress) => {
      blocks.forEach((block, i) => {
        let offset = order.indexOf(i) / blocks.length;
        let adjustedProgress = (progress - offset) * blocks.length;
        let opacity = isTop
          ? 1 - Math.min(1, Math.max(0, adjustedProgress))
          : Math.min(1, Math.max(0, adjustedProgress));

        block.style.opacity = opacity;
        console.log(`Block ${i + 1}, Opacity: ${opacity}`);
      });
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "top",
          "blocks-container",
          "absolute",
          "top-0",
          "w-full",
          "h-[400px]"
        )}
      >
        <div
          className={cn(
            "blocks-row",
            "w-full",
            "h-[100px]",
            "overflow-hidden",
            "flex"
          )}
          ref={(el) => (rowsRef.current[0] = el)}
        />
        <div
          className={cn(
            "blocks-row",
            "w-full",
            "h-[100px]",
            "overflow-hidden",
            "flex"
          )}
          ref={(el) => (rowsRef.current[1] = el)}
        />
        <div
          className={cn(
            "blocks-row",
            "w-full",
            "h-[100px]",
            "overflow-hidden",
            "flex"
          )}
          ref={(el) => (rowsRef.current[2] = el)}
        />
        <div
          className={cn(
            "blocks-row",
            "w-full",
            "h-[100px]",
            "overflow-hidden",
            "flex"
          )}
          ref={(el) => (rowsRef.current[3] = el)}
        />
      </div>
      <div
        className={cn(
          "bottom",
          "blocks-container",
          "absolute",
          "bottom-0",
          "w-full",
          "h-[400px]"
        )}
      >
        <div
          className={cn(
            "blocks-row",
            "w-full",
            "h-[100px]",
            "overflow-hidden",
            "flex"
          )}
          ref={(el) => (rowsRef.current[4] = el)}
        />
        <div
          className={cn(
            "blocks-row",
            "w-full",
            "h-[100px]",
            "overflow-hidden",
            "flex"
          )}
          ref={(el) => (rowsRef.current[5] = el)}
        />
        <div
          className={cn(
            "blocks-row",
            "w-full",
            "h-[100px]",
            "overflow-hidden",
            "flex"
          )}
          ref={(el) => (rowsRef.current[6] = el)}
        />
        <div
          className={cn(
            "blocks-row",
            "w-full",
            "h-[100px]",
            "overflow-hidden",
            "flex"
          )}
          ref={(el) => (rowsRef.current[7] = el)}
        />
      </div>
    </>
  );
}
