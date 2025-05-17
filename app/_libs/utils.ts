import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(section: string) {
  const element = document.getElementById(section);
  if (element) element.scrollIntoView({ behavior: "smooth" });
}
