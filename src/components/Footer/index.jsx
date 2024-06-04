import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import Section from "../Section";

function Footer({ className }, ref) {
  return <Section className={cn("bg-[#645439]", className)}>Section 3</Section>;
}

export default forwardRef(Footer);
