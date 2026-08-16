"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";

const faqs = [
  {
    q: "كيف أحجز موعد؟",
    a: "اضغط على زر واتساب وأرسل لنا الوقت المفضل والخدمة التي ترغب بها. سنرد عليك بالمواعيد المتاحة ونؤكد الحجز بعد الاتفاق على التفاصيل."
  },
  {
    q: "هل الحجز المسبق ضروري؟",
    a: "نوصي بالحجز المسبق لضمان توفر الغرفة والموعد المناسب. قد تتوفر مواعيد في نفس اليوم حسب جدول الحجوزات."
  },
  {
    q: "هل الغرف خاصة؟",
    a: "نعم، يتم تقديم الجلسات داخل غرف مستقلة ومجهزة بما يحافظ على الخصوصية والهدوء طوال وقت الخدمة."
  },
  {
    q: "ماذا لو احتجت لتعديل أو إلغاء الموعد؟",
    a: "تواصل معنا عبر واتساب في أقرب وقت ممكن. تطبق قواعد التعديل والإلغاء الموضحة في سياسة الحجز والإلغاء، وقد تختلف المعالجة حسب موعد الطلب ونوع الحجز."
  },
  {
    q: "هل الخدمات علاج طبي؟",
    a: "لا. الخدمات مخصصة للعناية والاسترخاء العام ولا تعتبر تشخيصًا أو علاجًا طبيًا أو بديلًا عن استشارة مختص صحي عند الحاجة."
  },
  {
    q: "هل يمكنني السؤال عن الأسعار قبل الحجز؟",
    a: "بالطبع. أرسل اسم الخدمة عبر واتساب وسنوضح السعر والمدة وأي تفاصيل مرتبطة بالحجز قبل تأكيد الموعد."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    const nextOpen = openIndex === index ? null : index;

    answerRefs.current.forEach((element, i) => {
      if (!element) return;
      const shouldOpen = i === nextOpen;
      gsap.to(element, {
        height: shouldOpen ? element.scrollHeight : 0,
        opacity: shouldOpen ? 1 : 0,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true
      });
    });

    setOpenIndex(nextOpen);
  };

  return (
    <section className="faqSection section" id="faq">
      <div className="container faqGrid">
        <div className="faqIntro" data-reveal>
          <span className="eyebrow">أسئلة شائعة</span>
          <h2>قبل ما تحجز،<br/><em>خلّي كل شيء واضح.</em></h2>
          <p>جمعنا أهم الأسئلة التي قد تحتاجها قبل التواصل. ولو سؤالك غير موجود، واتساب أسرع طريق للوصول لنا.</p>
          <a className="textLink" href="https://wa.me/xxxxxxxxxxxxxx" target="_blank" rel="noreferrer">
            اسألنا على واتساب <i className="fa-brands fa-whatsapp" />
          </a>
        </div>

        <div className="faqList" data-reveal>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article className={`faqItem ${isOpen ? "is-open" : ""}`} key={item.q}>
                <button
                  type="button"
                  className="faqQuestion"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span><small>0{index + 1}</small>{item.q}</span>
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="faqAnswer"
                  ref={(node) => {
                    answerRefs.current[index] = node;
                  }}
                  style={{ height: index === 0 ? "auto" : 0, opacity: index === 0 ? 1 : 0 }}
                >
                  <p>{item.a}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
