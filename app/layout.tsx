import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cairo } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MotionController from "@/components/MotionController";

const cairo = Cairo({ subsets: ["arabic", "latin"], display: "swap" });

export const metadata: Metadata = {
  title: "سكون سبا | مساحة هادئة للاسترخاء والعناية",
  description:
    "تجربة سبا هادئة بخدمات تدليك واسترخاء في أجواء مريحة وخصوصية عالية. تواصل معنا مباشرة عبر واتساب للحجز والاستفسار.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "سكون سبا | وقتك للهدوء",
    description: "مساحة هادئة، غرف خاصة، وتجربة عناية مصممة للراحة.",
    type: "website",
    locale: "ar_SA"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <SmoothScroll>
          <MotionController />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
