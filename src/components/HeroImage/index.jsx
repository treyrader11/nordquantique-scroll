import { cn } from "@/lib/utils";
import BlockRows from "../BlockRows";
import Image from "next/image";

export default function HeroImage({ className }) {
  return (
    <section
      className={cn(
        "relative",
        "w-full",
        "min-h-screen",
        "h-[200vh]",
        className
      )}
    >
      <Image
        fill
        className={cn("absolute size-full object-cover z-[-1]")}
        src="/images/cactus.jpg"
        alt=""
      />
      <BlockRows />
    </section>
  );
}
