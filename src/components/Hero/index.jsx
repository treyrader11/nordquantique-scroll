import { cn } from "@/lib/utils";
import Section from "../Section";
import Heading from "../Heading";

export default function Hero({ className }) {
  return (
    <Section title="Section 1" className={cn("bg-[#757637]", className)}>
      <Heading>Section 1</Heading>
    </Section>
  );
}
