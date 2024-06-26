import { cn } from "@/lib/utils";
import Blocks from "../Blocks";
import Image from "next/image";
import Section from "../Section";

export default function HeroImage({ className }) {
  return (
    <Section className={cn("h-[200vh]", className)}>
      <Image
        fill
        className={cn("absolute size-full object-cover z-[-1]")}
        src="/assets/img-1.jpg"
        alt=""
      />
      {/* <Blocks className="top" startIndex={0} />
      <Blocks className="bottom" startIndex={4} /> */}
      <Blocks />
    </Section>
  );
}
