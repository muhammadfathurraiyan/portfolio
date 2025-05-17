"use client";
import { cn } from "@/app/_libs/utils";
import React from "react";

const Flower = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        width="168"
        height="168"
        viewBox="0 0 168 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        className={cn(className)}
        {...props}
      >
        <g clipPath="url(#clip0_8_37)">
          <path d="M84 0V168" stroke="#1A1A1A" />
          <path d="M168 83.9988H0" stroke="#1A1A1A" />
          <path d="M62.4752 2.80113L105.509 165.196" stroke="#1A1A1A" />
          <path d="M165.196 62.4832L2.80359 105.517" stroke="#1A1A1A" />
          <path d="M106.363 3.03032L61.6392 164.97" stroke="#1A1A1A" />
          <path d="M164.97 106.362L3.03027 61.638" stroke="#1A1A1A" />
          <path d="M127.12 11.9054L40.9023 156.095" stroke="#1A1A1A" />
          <path d="M156.097 127.109L11.9078 40.8914" stroke="#1A1A1A" />
          <path d="M143.444 24.6444L24.5671 143.355" stroke="#1A1A1A" />
          <path d="M143.35 143.439L24.6395 24.5617" stroke="#1A1A1A" />
          <path d="M155.992 40.7027L12.0272 127.295" stroke="#1A1A1A" />
          <path d="M127.292 155.983L40.6995 12.0176" stroke="#1A1A1A" />
        </g>
      </svg>
    );
  }
);
Flower.displayName = "Flower";
export { Flower };
