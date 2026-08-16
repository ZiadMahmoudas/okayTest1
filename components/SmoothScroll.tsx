"use client";

import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Refresh after fonts/images/layout have had a moment to settle.
    const refresh = () => ScrollTrigger.refresh();
    const timer = window.setTimeout(refresh, 220);
    window.addEventListener("load", refresh, { once: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", refresh);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        // autoRaf keeps scrolling alive independently from GSAP's mount timing.
        autoRaf: true,
        lerp: 0.095,
        smoothWheel: true,
        wheelMultiplier: 0.92,
        touchMultiplier: 1,
        overscroll: true,
        anchors: {
          offset: -86
        },
        stopInertiaOnNavigate: true
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
