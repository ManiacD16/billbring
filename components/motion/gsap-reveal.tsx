"use client";

import type { PropsWithChildren } from "react";
import { useEffect, useRef } from "react";

export function GsapReveal({
  children,
}: PropsWithChildren) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = root.current;

    if (!node) return;

    /*
     * GSAP must never modify the DOM while React is hydrating.
     *
     * useEffect already runs after hydration, but waiting for two RAFs
     * also lets nested Framer Motion components finish attaching.
     */
    let cancelled = false;
    let frame1 = 0;
    let frame2 = 0;
    let cleanup = () => {};

    frame1 = window.requestAnimationFrame(() => {
      frame2 = window.requestAnimationFrame(() => {
        if (cancelled) return;

        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        if (reducedMotion) return;

        void Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]).then(([gsapModule, triggerModule]) => {
          if (cancelled || !node) return;

          const gsap = gsapModule.default;
          const ScrollTrigger =
            triggerModule.ScrollTrigger;

          gsap.registerPlugin(ScrollTrigger);

          const context = gsap.context(() => {
            /*
             * Normal reveal elements
             */
            const revealElements = Array.from(
              node.querySelectorAll<HTMLElement>(
                "[data-reveal]",
              ),
            );

            revealElements.forEach((element) => {
              const type =
                element.dataset.reveal || "up";

              const from =
                type === "left"
                  ? {
                      opacity: 0,
                      x: -28,
                      y: 0,
                    }
                  : type === "right"
                    ? {
                        opacity: 0,
                        x: 28,
                        y: 0,
                      }
                    : type === "scale"
                      ? {
                          opacity: 0,
                          scale: 0.975,
                          y: 8,
                        }
                      : {
                          opacity: 0,
                          x: 0,
                          y: 22,
                        };

              gsap.fromTo(
                element,
                from,
                {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,

                  duration: 0.78,
                  ease: "power3.out",

                  immediateRender: false,

                  clearProps:
                    "transform,opacity",

                  scrollTrigger: {
                    trigger: element,
                    start: "top 89%",
                    once: true,
                  },
                },
              );
            });

            /*
             * Stagger groups
             */
            const staggerGroups = Array.from(
              node.querySelectorAll<HTMLElement>(
                "[data-reveal-stagger]",
              ),
            );

            staggerGroups.forEach((group) => {
              const elements = Array.from(
                group.children,
              ).filter(
                (child) =>
                  !(child as HTMLElement).dataset
                    .reveal,
              ) as HTMLElement[];

              if (!elements.length) return;

              gsap.fromTo(
                elements,
                {
                  opacity: 0,
                  y: 20,
                },
                {
                  opacity: 1,
                  y: 0,

                  duration: 0.68,
                  stagger: 0.06,

                  ease: "power3.out",

                  immediateRender: false,

                  clearProps:
                    "transform,opacity",

                  scrollTrigger: {
                    trigger: group,
                    start: "top 88%",
                    once: true,
                  },
                },
              );
            });

            /*
             * Parallax
             */
            const parallaxElements = Array.from(
              node.querySelectorAll<HTMLElement>(
                "[data-parallax]",
              ),
            );

            parallaxElements.forEach(
              (element) => {
                const requestedDistance =
                  Number(
                    element.dataset.parallax ||
                      28,
                  );

                const distance = Math.min(
                  Math.max(
                    requestedDistance,
                    0,
                  ),
                  48,
                );

                gsap.fromTo(
                  element,
                  {
                    y: -distance / 2,
                  },
                  {
                    y: distance / 2,

                    ease: "none",

                    immediateRender: false,

                    scrollTrigger: {
                      trigger: element,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 0.6,
                    },
                  },
                );
              },
            );

            ScrollTrigger.refresh();
          }, node);

          cleanup = () => {
            context.revert();
          };
        });
      });
    });

    return () => {
      cancelled = true;

      window.cancelAnimationFrame(frame1);
      window.cancelAnimationFrame(frame2);

      cleanup();
    };
  }, []);

  return <div ref={root}>{children}</div>;
}