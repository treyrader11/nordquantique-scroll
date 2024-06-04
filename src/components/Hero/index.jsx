import { cn } from "@/lib/utils";
import Section from "../Section";

export default function Hero({ className }) {
  return (
    <Section title="Section 1" className={cn("bg-[#757637]", className)}>
      {/* <h1
        className={cn(
          "absolute",
          "top-1/2",
          "left-1/2",
          "-translate-x-1/2",
          "-translate-y-1/2",
          "text-[12vw]",
          "-tracking-wide",
          "opacity-50"
        )}
      >
        Section 1
      </h1> */}
      Section 1
    </Section>
  );
}
