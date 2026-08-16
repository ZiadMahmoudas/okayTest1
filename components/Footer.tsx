import Link from "next/link";

const whatsapp = "https://wa.me/xxxxxxxxxxxxxx?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B9%D9%8A%D8%AF";

export default function Footer() {
  return (
    <footer className="siteFooter" id="contact">
      <div className="footerAura footerAuraOne" aria-hidden="true" />
      <div className="footerAura footerAuraTwo" aria-hidden="true" />

      <div className="container footerShell">
        <div className="footerPitch">
          <div className="footerPitchCopy">
            <span className="footerOverline"><i className="fa-solid fa-spa" /> سكون SPA</span>
            <h2>موعد واحد.<br/><em>وقت أهدأ لنفسك.</em></h2>
            <p>كل تفاصيل الخدمة والسعر والموعد تتأكد معك قبل الحجز. لو عندك سؤال، ابدأ محادثة واتساب وسنساعدك في اختيار الوقت والخدمة المناسبة.</p>
          </div>
          <a className="footerBookButton" href={whatsapp} target="_blank" rel="noreferrer">
            <span><small>تواصل الآن</small>احجز عبر واتساب</span>
            <i className="fa-brands fa-whatsapp" />
          </a>
        </div>

        <div className="footerRule" />

        <div className="footerMainGrid footerMainGridClean">
          <div className="footerIdentity">
            <div className="footerBrand">سكون <span>SPA</span></div>
            <p>مساحة هادئة للعناية والاسترخاء العام، مع اهتمام بالخصوصية والنظافة وتجربة حجز واضحة من أول رسالة.</p>
            <div className="footerStatus"><span /> متاح للحجز المسبق يوميًا</div>
          </div>

          <div className="footerColumn">
            <h3>استكشف</h3>
            <div className="footerLinks">
              <a href="#services">الخدمات <i className="fa-solid fa-arrow-up-left-from-circle" /></a>
              <a href="#experience">تجربة المكان <i className="fa-solid fa-arrow-up-left-from-circle" /></a>
              <a href="#faq">الأسئلة الشائعة <i className="fa-solid fa-arrow-up-left-from-circle" /></a>
              <a href="#top">العودة للأعلى <i className="fa-solid fa-arrow-up" /></a>
            </div>
          </div>

          <div className="footerColumn footerPoliciesWide">
            <h3>السياسات</h3>
            <div className="footerPolicyGrid">
              <div className="footerLinks">
                <Link href="/privacy">سياسة الخصوصية <i className="fa-solid fa-chevron-left" /></Link>
                <Link href="/terms">شروط الاستخدام <i className="fa-solid fa-chevron-left" /></Link>
                <Link href="/cookies">ملفات الارتباط <i className="fa-solid fa-chevron-left" /></Link>
                <Link href="/disclaimer">إخلاء المسؤولية <i className="fa-solid fa-chevron-left" /></Link>
              </div>
              <div className="footerLinks">
                <Link href="/cancellation">الحجز والإلغاء <i className="fa-solid fa-chevron-left" /></Link>
                <Link href="/refund">الدفع والاسترداد <i className="fa-solid fa-chevron-left" /></Link>
                <span className="footerMiniNote">يتم اعتماد السعر والتوفر وأي عربون — إن وُجد — قبل تأكيد الموعد.</span>
              </div>
            </div>
          </div>

          <div className="footerColumn footerContact footerContactClean">
            <h3>تواصل معنا</h3>
            <a className="footerContactRow" href="tel:+xxxxxxxxxxxxxx">
              <i className="fa-solid fa-phone" />
              <bdi className="footerLtr footerPhoneNumber" dir="ltr">+966 50 000 0000</bdi>
            </a>
            <a className="footerContactRow" href="mailto:hello@sukoon-spa.com">
              <i className="fa-regular fa-envelope" />
              <bdi className="footerLtr" dir="ltr">hello@sukoon-spa.com</bdi>
            </a>
            <div className="footerContactRow"><i className="fa-solid fa-location-dot" /><span>الرياض، المملكة العربية السعودية</span></div>
            <div className="footerContactRow"><i className="fa-regular fa-clock" /><span>يوميًا — بالمواعيد المسبقة</span></div>
          </div>
        </div>

        <div className="footerCompliance">
          <div className="footerComplianceIcon"><i className="fa-solid fa-shield-heart" /></div>
          <div>
            <strong>معلومة مهمة قبل الحجز</strong>
            <p>الخدمات المعروضة مخصصة للعناية والاسترخاء العام وليست تشخيصًا أو علاجًا طبيًا. الصور توضيحية للأجواء، وتفاصيل الخدمة النهائية والمواعيد والأسعار يتم تأكيدها مباشرة مع المركز.</p>
          </div>
          <Link href="/disclaimer">اقرأ التفاصيل <i className="fa-solid fa-arrow-left" /></Link>
        </div>

        <div className="footerBottom">
          <span>© 2026 سكون سبا. جميع الحقوق محفوظة.</span>
          <span className="footerCredits"><i className="fa-regular fa-image" /> صور مختارة من Unsplash</span>
        </div>
      </div>
    </footer>
  );
}
