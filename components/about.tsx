"use client";

import { siteConfig } from "@/lib/config";
import { useReveal } from "@/lib/use-reveal";

export default function About() {
  const ref = useReveal();

  return (
    <section className="py-24 px-6 bg-dark-bg" id="about" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="text-gold text-sm font-bold tracking-wider mb-3">
              نبذة عن المشروع
            </div>
            <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold mb-5 leading-[1.3]">
              مشروع Hyde Park Central
            </h2>
            <p className="text-gray-400 text-[17px] leading-[1.8] mb-5 max-w-[700px]">
              كمبوند سكني راقٍ يجمع بين التصميم العصري والخدمات المتكاملة في
              موقع استراتيجي بالتجمع السادس، نيو كايرو. من تطوير شركة هايد بارك
              للتطوير العقاري.
            </p>
            <p className="text-gray-400 text-[17px] leading-[1.8] mb-5 max-w-[700px]">
              يقع المشروع على مساحة {siteConfig.area} فدان تضم تصميمات معمارية
              عصرية، مساحات خضراء واسعة، وتخطيط ذكي يوفر إطلالات خلابة وحياة
              هادئة لجميع الوحدات.
            </p>
            <p className="text-gray-400 text-[17px] leading-[1.8] max-w-[700px]">
              يتميز هايد بارك سنترال بتنوع الوحدات السكنية من فلل مستقلة وتوين
              هاوس وتاون هاوس وشقق سكنية بمساحات متنوعة تناسب احتياجات العائلات
              الباحثة عن الراحة والخصوصية.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { number: siteConfig.area, label: "فدان" },
                { number: siteConfig.greenSpaces + "%", label: "مساحات خضراء" },
                { number: siteConfig.unitTypes, label: "أنواع وحدات" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-dark-card border border-dark-border rounded-xl p-6 text-center hover:border-gold hover:-translate-y-1 transition-all"
                >
                  <div className="text-4xl font-black text-gold leading-none mb-1">
                    {stat.number}
                  </div>
                  <div className="text-[13px] text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Images placeholder */}
          <div className="reveal grid grid-cols-2 gap-4">
            <div className="row-span-2 rounded-xl overflow-hidden bg-dark-card border border-dark-border min-h-[300px] flex items-center justify-center">
              <span className="text-gold/30 text-sm">Hyde Park Central</span>
            </div>
            <div className="rounded-xl overflow-hidden bg-dark-card border border-dark-border aspect-[4/3] flex items-center justify-center">
              <span className="text-gold/30 text-sm">Master Plan</span>
            </div>
            <div className="rounded-xl overflow-hidden bg-dark-card border border-dark-border aspect-[4/3] flex items-center justify-center">
              <span className="text-gold/30 text-sm">Landscape</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
