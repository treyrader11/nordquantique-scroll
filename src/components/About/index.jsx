import { cn } from "@/lib/utils";
import Section from "../Section";

export default function About({ className }) {
  return (
    <Section title="Section 2" className={cn("bg-[#375955]", className)}>
      Section 2
    </Section>
  );
}
