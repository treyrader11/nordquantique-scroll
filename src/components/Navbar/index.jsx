import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav
      className={cn(
        "fixed",
        "top-0",
        "z-10",
        "flex",
        "items-center",
        "inset-x-0",

        "bg-neutral-800/80"
      )}
    >
      <ul className="flex items-center gap-4">
        <li className="">
          <a
            className={cn(
              "hover:opacity-70",
              "transition-opacity",
              "duration-500"
            )}
            href="https://www.youtube.com/watch?v=A0gWcM45VeI"
            target="_blank"
          >
            Nord Quantique Scroll using GSAP
          </a>
        </li>
        <li className="">
          <a
            className={cn(
              "hover:opacity-70",
              "transition-opacity",
              "duration-500"
            )}
            href="https://nordquantique.ca/fr"
            target="_blank"
          >
            Website inspiration
          </a>
        </li>
      </ul>
    </nav>
  );
}
