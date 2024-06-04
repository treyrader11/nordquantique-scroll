import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import Section from "../Section";
import Heading from "../Heading";

function Footer({ className }, ref) {
  return (
    <Section className={cn("bg-[#645439]", className)}>
      <Heading>Section 3</Heading>
    </Section>
  );
}

export default forwardRef(Footer);
