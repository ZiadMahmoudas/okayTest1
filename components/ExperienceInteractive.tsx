"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

const experienceItems = [
  {
    title: "خصوصية",
    text: "غرف مستقلة ومهيأة لتجربة أكثر راحة وهدوءًا.",
    icon: "fa-solid fa-door-closed",
    image: "https://images.unsplash.com/photo-1737352777897-e22953991a32?auto=format&fit=crop&w=1800&q=82",
    alt: "غرفة سبا خاصة مع سرير جلسات"
  },
  {
    title: "نظافة",
    text: "تجهيز مستمر للمكان والمناشف والأدوات قبل كل موعد.",
    icon: "fa-solid fa-soap",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=82",
    alt: "مناشف ومنتجات عناية داخل أجواء سبا"
  },
  {
    title: "هدوء",
    text: "إضاءة دافئة ومساحات مرتبة تساعدك على الابتعاد عن صخب اليوم.",
    icon: "fa-solid fa-leaf",
    image: "https://images.unsplash.com/photo-1772616748594-09093a81ffa9?auto=format&fit=crop&w=1800&q=82",
    alt: "ساونا خشبية هادئة بإضاءة دافئة"
  },
  {
    title: "حجز سريع",
    text: "تأكيد الموعد والاستفسار مباشرة عبر واتساب بخطوات بسيطة.",
    icon: "fa-brands fa-whatsapp",
    image: "https://images.unsplash.com/photo-1620733723572-11c53f73a416?auto=format&fit=crop&w=1600&q=82",
    alt: "مناشف وعطر منزلي وشموع لأجواء الاسترخاء"
  }
];

export default function ExperienceInteractive() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const visualRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pausedRef = useRef(false);

  const activate = useCallback((index: number) => {
    const normalized = (index + experienceItems.length) % experienceItems.length;
    if (normalized === activeRef.current) return;

    const previousIndex = activeRef.current;
    const previous = slideRefs.current[previousIndex];
    const next = slideRefs.current[normalized];

    activeRef.current = normalized;
    setActive(normalized);

    if (!next) return;

    if (previous) {
      gsap.killTweensOf(previous);
      gsap.to(previous, {
        opacity: 0,
        scale: 0.985,
        duration: 0.48,
        ease: "power2.out",
        onComplete: () => gsap.set(previous, { visibility: "hidden", zIndex: 1 })
      });
    }

    gsap.killTweensOf(next);
    gsap.set(next, { visibility: "visible", zIndex: 2 });
    gsap.fromTo(
      next,
      { opacity: 0, scale: 1.075, clipPath: "inset(7% 7% 7% 7%)" },
      {
        opacity: 1,
        scale: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.72,
        ease: "power3.out"
      }
    );
  }, []);

  useEffect(() => {
    gsap.registerPlugin(Observer);

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      gsap.set(slide, {
        opacity: index === 0 ? 1 : 0,
        visibility: index === 0 ? "visible" : "hidden",
        zIndex: index === 0 ? 2 : 1,
        scale: 1
      });
    });

    const observer = visualRef.current
      ? Observer.create({
          target: visualRef.current,
          // Keep vertical scrolling native. Observer is only for an intentional horizontal swipe.
          type: "touch,pointer",
          tolerance: 28,
          lockAxis: true,
          preventDefault: false,
          onLeft: () => activate(activeRef.current + 1),
          onRight: () => activate(activeRef.current - 1)
        })
      : null;

    const timer = window.setInterval(() => {
      if (!pausedRef.current && document.visibilityState === "visible") {
        activate(activeRef.current + 1);
      }
    }, 4800);

    return () => {
      observer?.kill();
      window.clearInterval(timer);
    };
  }, [activate]);

  return (
    <section className="experience section" id="experience">
      <div className="container experienceGrid">
        <div
          className="experienceVisual"
          ref={visualRef}
          data-reveal
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div className="experienceSlides" data-parallax>
            {experienceItems.map((item, index) => (
              <div
                className="experienceSlide"
                key={item.title}
                ref={(node) => {
                  slideRefs.current[index] = node;
                }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                  priority={index === 0}
                />
              </div>
            ))}
            <div className="visualShade" />
            <div className="visualCounter" aria-hidden="true">
              <strong>0{active + 1}</strong>
              <span>/ 04</span>
            </div>
            <div className="swipeHint"><i className="fa-solid fa-arrows-up-down" /> اسحب أو مرّر</div>
          </div>

          <div className="experienceMini" key={`mini-${active}`}>
            <Image
              src={experienceItems[(active + 1) % experienceItems.length].image}
              alt="لقطة أخرى من أجواء السبا"
              fill
              sizes="220px"
            />
          </div>
          <div className="experienceBadge"><strong>{experienceItems[active].title}</strong><span>جزء من التجربة</span></div>
        </div>

        <div className="experienceCopy" data-reveal>
          <span className="eyebrow">التجربة</span>
          <h2>الجو جزء من<br/><em>الخدمة نفسها.</em></h2>
          <p>كل تفصيلة في المكان معمولة عشان تقلل الضوضاء البصرية وتخلي التجربة أبسط: خصوصية، ترتيب، إضاءة هادئة وتواصل واضح.</p>

          <div className="featureList interactiveFeatures">
            {experienceItems.map((item, index) => (
              <button
                type="button"
                className={`feature featureButton ${active === index ? "is-active" : ""}`}
                key={item.title}
                onMouseEnter={() => activate(index)}
                onFocus={() => activate(index)}
                onClick={() => activate(index)}
                aria-label={`عرض صورة ${item.title}`}
                aria-pressed={active === index}
              >
                <span className="featureNumber">0{index + 1}</span>
                <i className={item.icon} aria-hidden="true" />
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <span className="featureArrow"><i className="fa-solid fa-arrow-left" /></span>
              </button>
            ))}
          </div>
          <p className="featureHelper"><i className="fa-regular fa-hand-pointer" /> حرّك الماوس على أي ميزة، والصورة تتبدّل فورًا.</p>
        </div>
      </div>
    </section>
  );
}
