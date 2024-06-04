import { cn } from "@/lib/utils";
import { forwardRef } from "react";

function Section({ children, title, className }, ref) {
  return (
    <section
      ref={ref}
      className={cn("relative w-full min-h-screen", className)}
    >
      <h1
        className={cn(
          "absolute",
          "top-1/2",
          "left-1/2",
          "-translate-x-1/2",
          "-translate-y-1/2",
          "text-[12vw]",
          "-tracking-wide",
          "opacity-50",
          "whitespace-nowrap"
        )}
      >
        {/* {title} */}
        {children}
      </h1>
    </section>
  );
}

export default forwardRef(Section);
