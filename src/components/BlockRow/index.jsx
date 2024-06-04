"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function BlockRow(props, ref) {
  return (
    <div
      className={cn(
        "blocks-row",
        "w-full",
        "h-[100px]",
        "overflow-hidden",
        "flex"
      )}
      ref={ref}
    />
  );
}

export default forwardRef(BlockRow);
