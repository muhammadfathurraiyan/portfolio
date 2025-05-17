"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef, useState } from "react";
import { scrollToSection } from "../_libs/utils";

gsap.registerPlugin(SplitText, useGSAP);

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      {NAVIGATION_ITEMS.map((item, index) => (
        <NavigationItem key={index} label={item.label} sectionId={item.sectionId} />
      ))}
    </header>
  );
}

const NavigationItem = ({ label, sectionId }: { label: string; sectionId: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {}, { scope: buttonRef, dependencies: [isHovered] });

  return (
    <button
      ref={buttonRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => scrollToSection(sectionId)}
      className="h-10 w-fit"
    >
      <span>{label}</span>
      <span>{label}</span>
    </button>
  );
};

const NAVIGATION_ITEMS = [
  {
    label: "Home",
    sectionId: "home",
  },
  {
    label: "Experiences",
    sectionId: "experiences",
  },
  {
    label: "About",
    sectionId: "about",
  },
];
