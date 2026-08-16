import Link from "next/link";
import Footer from "@/components/Footer";

export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated = "16 أغسطس 2026",
  sections,
  notice
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  sections: LegalSection[];
  notice?: string;
}) {
  return (
    <main className="legalPage">
      <section className="legalHero">
        <div className="container">
          <Link className="back" href="/"><i className="fa-solid fa-arrow-right" /> العودة للصفحة الرئيسية</Link>
          <span className="eyebrow light">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <small>آخر تحديث: {updated}</small>
        </div>
      </section>
      <article className="container legalContent">
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            )}
          </section>
        ))}
        {notice && <div className="legalWarning"><i className="fa-solid fa-triangle-exclamation" /> <span>{notice}</span></div>}
        <div className="legalContactBox">
          <h2>للتواصل بشأن هذه السياسة</h2>
          <p>يمكنك مراسلتنا على <a href="mailto:example@gggg">example@gggg</a> أو التواصل عبر واتساب على <a href="https://wa.me/xxxxxxxxxxxxxx" target="_blank" rel="noreferrer" dir="ltr">xxxxxxxxxxxxxxxxxxx0</a>.</p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
