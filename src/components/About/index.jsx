import { cn } from "@/lib/utils";
import Section from "../Section";
import Heading from "../Heading";

export default function About({ className }) {
  return (
    <Section title="Section 2" className={cn("bg-[#375955]", className)}>
      <Heading>Section 2</Heading>
    </Section>
  );
}
