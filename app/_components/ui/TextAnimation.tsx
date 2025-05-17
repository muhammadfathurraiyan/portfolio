"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, useGSAP, ScrollTrigger);

type TextAnimationProps = {
  children: React.ReactElement | React.ReactNode;
  animationOnScroll?: boolean;
  delay?: number;
};

export function TextAnimation({
  children,
  animationOnScroll = false,
  delay = 0,
}: TextAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<SplitText[]>([]);
  const linesRef = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      elementRef.current = [];
      splitRef.current = [];
      linesRef.current = [];

      let elements: HTMLElement[] = [];
      if (containerRef.current.hasAttribute("data-text-animation-wrapper")) {
        elements = Array.from(containerRef.current.children) as HTMLElement[];
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        elementRef.current.push(element);
        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });

        splitRef.current.push(split);

        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          }

          (element as HTMLElement).style.textIndent = "0";
        }

        linesRef.current.push(...(split.lines as HTMLElement[]));
      });

      gsap.set(linesRef.current, { y: "100%" });

      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
      };

      if (animationOnScroll) {
        gsap.to(linesRef.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        });
      } else {
        gsap.to(linesRef.current, animationProps);
      }

      return () => {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    { scope: containerRef, dependencies: [animationOnScroll, delay] }
  );

  return (
    <div ref={containerRef} data-text-animation-wrapper>
      {children}
    </div>
  );
}
