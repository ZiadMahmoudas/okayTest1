"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MotionController() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const header = document.querySelector<HTMLElement>(".header");

    if (reduceMotion) {
      document.documentElement.classList.add("motion-ready");
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(".hero-kicker, .hero-title-line, .heroLead, .heroActions, .heroNote", {
        opacity: 0,
        y: 44
      });
      gsap.set(".heroImage", { scale: 1.12 });

      const heroTl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.08 });
      heroTl
        .to(".heroImage", { scale: 1.025, duration: 2.1, ease: "power2.out" }, 0)
        .to(".hero-kicker", { opacity: 1, y: 0, duration: 0.65 }, 0.16)
        .to(".hero-title-line", { opacity: 1, y: 0, duration: 0.95, stagger: 0.11 }, 0.28)
        .to(".heroLead", { opacity: 1, y: 0, duration: 0.72 }, 0.62)
        .to(".heroActions", { opacity: 1, y: 0, duration: 0.7 }, 0.76)
        .to(".heroNote", { opacity: 0.76, y: 0, duration: 0.55 }, 0.9);

      gsap.from(".trustItem", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".trustBar", start: "top 94%", once: true }
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 64, filter: "blur(7px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        const images = element.querySelectorAll("img");
        if (!images.length) return;

        gsap.fromTo(
          images,
          { yPercent: -4, scale: 1.065 },
          {
            yPercent: 5,
            scale: 1.01,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7
            }
          }
        );
      });

      gsap.from(".quoteInner blockquote", {
        opacity: 0,
        scale: 0.94,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".quoteBand", start: "top 78%", once: true }
      });

      gsap.from(".footerShell", {
        opacity: 0,
        y: 44,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".siteFooter", start: "top 90%", once: true }
      });

      if (header) {
        ScrollTrigger.create({
          start: 70,
          end: "max",
          onUpdate: (self) => {
            const y = self.scroll();
            header.classList.toggle("is-scrolled", y > 70);

            if (self.direction === 1 && y > 180) {
              header.classList.add("is-hidden");
            } else if (self.direction === -1) {
              header.classList.remove("is-hidden");
            }
          }
        });
      }
    });

    document.documentElement.classList.add("motion-ready");
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
