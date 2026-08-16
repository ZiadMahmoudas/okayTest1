import Image from "next/image";
import Footer from "@/components/Footer";
import ExperienceInteractive from "@/components/ExperienceInteractive";
import FAQ from "@/components/FAQ";

const whatsapp = "https://wa.me/xxxxxxxxxxxxxx?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%B3%D9%83%D9%88%D9%86%20%D8%B3%D8%A8%D8%A7";

const services = [
  {
    n: "01",
    title: "جلسة استرخاء",
    text: "جلسة هادئة داخل غرفة خاصة، بإضاءة مريحة وأجواء تساعدك على أخذ وقت بعيد عن ضغط اليوم.",
    time: "60 دقيقة",
    icon: "fa-solid fa-spa",
    image: "https://images.unsplash.com/photo-1745327883290-1e9c6447b938?auto=format&fit=crop&w=1400&q=82"
  },
  {
    n: "02",
    title: "تدليك سويدي",
    text: "جلسة بإيقاع متوازن ومريح تقدم بأسلوب احترافي مع إمكانية اختيار درجة الضغط المناسبة لك.",
    time: "60 / 90 دقيقة",
    icon: "fa-solid fa-hands",
    image: "https://images.unsplash.com/photo-1772378452022-94ee7971fe80?auto=format&fit=crop&w=1400&q=82"
  },
  {
    n: "03",
    title: "العناية بالقدمين",
    text: "وقت مخصص لراحة القدمين والعناية بهما ضمن تجربة مرتبة وبسيطة مع اهتمام بالنظافة والخصوصية.",
    time: "45 دقيقة",
    icon: "fa-solid fa-leaf",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=82"
  }
];

const trustItems = [
  ["fa-solid fa-door-closed", "غرف خاصة"],
  ["fa-solid fa-shield-halved", "خصوصية وراحة"],
  ["fa-solid fa-broom", "عناية بالنظافة"],
  ["fa-brands fa-whatsapp", "حجز مباشر"]
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#top" aria-label="سكون سبا">سكون <span>SPA</span></a>
          <nav className="navLinks" aria-label="القائمة الرئيسية">
            <a href="#services">الخدمات</a>
            <a href="#experience">التجربة</a>
            <a href="#faq">الأسئلة الشائعة</a>
            <a href="#contact">تواصل</a>
          </nav>
          <a className="navCta" href={whatsapp} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            <span>احجز عبر واتساب</span>
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <Image
          src="https://images.unsplash.com/photo-1737352777897-e22953991a32?auto=format&fit=crop&w=2200&q=86"
          alt="غرفة سبا هادئة ومجهزة"
          fill
          priority
          className="heroImage"
          sizes="100vw"
        />
        <div className="heroOverlay" />
        <div className="heroGrain" aria-hidden="true" />
        <div className="container heroContent">
          <span className="eyebrow light hero-kicker">مساحتك الخاصة للهدوء</span>
          <h1>
            <span className="hero-title-line">خذ وقتك.</span>
            <span className="hero-title-line"><em>واستعد هدوءك.</em></span>
          </h1>
          <p className="heroLead">تجربة تدليك واسترخاء في أجواء هادئة، غرف خاصة، وعناية بالتفاصيل من لحظة وصولك حتى نهاية الجلسة.</p>
          <div className="heroActions">
            <a className="btn primary" href={whatsapp} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp" aria-hidden="true" /> احجز موعدك الآن
            </a>
            <a className="btn ghost" href="#services">استكشف الخدمات <i className="fa-solid fa-arrow-down" /></a>
          </div>
          <div className="heroNote"><i className="fa-solid fa-circle" /> الحجز المسبق متاح يوميًا حسب المواعيد المتوفرة</div>
        </div>
        <a className="scrollHint" href="#intro" aria-label="انتقل للمحتوى"><i className="fa-solid fa-arrow-down" /></a>
      </section>

      <section className="trustBar" aria-label="مميزات سكون سبا">
        <div className="container trustGrid">
          {trustItems.map(([icon, label]) => (
            <div className="trustItem" key={label}><i className={icon} /><span>{label}</span></div>
          ))}
        </div>
      </section>

      <section className="intro section" id="intro">
        <div className="container introGrid">
          <div data-reveal>
            <span className="eyebrow">عن سكون</span>
            <h2>مكان بسيط، هادئ،<br/>ومصمم <em>لراحتك.</em></h2>
          </div>
          <div className="introCopy" data-reveal>
            <p>نؤمن أن الراحة تبدأ من التفاصيل الصغيرة: مساحة مرتبة، إضاءة دافئة، خصوصية، وخدمة واضحة بدون تعقيد.</p>
            <p>اختر الجلسة المناسبة لك وتواصل معنا عبر واتساب، وسنساعدك في معرفة الخيارات والأسعار والمواعيد المتاحة قبل تأكيد الحجز.</p>
            <div className="introSignature"><span>سكون</span><small>وقت أبسط. راحة أوضح.</small></div>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="container">
          <div className="sectionHead" data-reveal>
            <div><span className="eyebrow">خدماتنا</span><h2>جلسات مختارة<br/>لوقت <em>أهدأ.</em></h2></div>
            <p>خيارات واضحة ومباشرة بدون ادعاءات علاجية أو وعود مبالغ فيها؛ تجربة عناية واسترخاء في بيئة مرتبة ومريحة.</p>
          </div>
          <div className="serviceGrid">
            {services.map((service) => (
              <article className="serviceCard" key={service.n} data-reveal>
                <div className="serviceHoverImage" aria-hidden="true">
                  <Image src={service.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                  <div />
                </div>
                <div className="serviceContent">
                  <div className="serviceTop"><span>{service.n}</span><small>{service.time}</small></div>
                  <div className="serviceIcon"><i className={service.icon} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={whatsapp} target="_blank" rel="noreferrer">استفسر عن الخدمة <i className="fa-solid fa-arrow-left" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ExperienceInteractive />

      <section className="quoteBand">
        <div className="container quoteInner" data-reveal>
          <i className="fa-solid fa-leaf leaf" aria-hidden="true" />
          <blockquote>“أحيانًا كل ما تحتاجه هو مساحة هادئة، ووقت لنفسك.”</blockquote>
          <i className="fa-solid fa-leaf leaf leafFlip" aria-hidden="true" />
        </div>
      </section>

      <FAQ />

      <section className="ctaSection section">
        <div className="container ctaBox" data-reveal>
          <div><span className="eyebrow light">جاهز لوقت أهدأ؟</span><h2>احجز جلستك<br/><em>بخطوة واحدة.</em></h2></div>
          <div className="ctaRight">
            <p>راسلنا على واتساب لمعرفة المواعيد والأسعار واختيار الخدمة المناسبة قبل تأكيد الحجز.</p>
            <a className="btn white" href={whatsapp} target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp" /> تواصل عبر واتساب</a>
            <small><i className="fa-solid fa-lock" /> بيانات التواصل تستخدم فقط لخدمة استفسارك وحجزك وفق سياسة الخصوصية.</small>
          </div>
        </div>
      </section>

      <Footer />

      <a className="whatsappFloat" href={whatsapp} target="_blank" rel="noreferrer" aria-label="تواصل عبر واتساب">
        <i className="fa-brands fa-whatsapp" aria-hidden="true" /><span>واتساب</span>
      </a>
    </main>
  );
}
