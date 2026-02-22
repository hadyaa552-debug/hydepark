"use client";

import { units } from "@/lib/config";
import { useReveal } from "@/lib/use-reveal";

export default function Units() {
  const ref = useReveal();

  return (
    <section className="py-24 px-6 bg-dark-bg" id="units" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal text-center mb-12">
          <div className="text-gold text-sm font-bold tracking-wider mb-3">
            الوحدات المتاحة
          </div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.3]">
            تنوع يلبي جميع الاحتياجات
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {units.map((unit) => (
            <div
              key={unit.id}
              className="reveal group bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-gold hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all"
            >
              <div className="aspect-[16/10] bg-dark relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-dark-card to-dark flex items-center justify-center text-2xl opacity-40 group-hover:scale-105 transition-transform duration-500">
                  {unit.icon}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-dark-card to-transparent" />
                <div
                  className="absolute top-3 right-3 z-10 bg-gold/90 text-dark-bg px-3 py-1 rounded-md text-[11px] font-bold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {unit.nameEn}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{unit.nameAr}</h3>
                <p className="text-[13px] text-gray-500 leading-[1.6] mb-3">
                  {unit.description}
                </p>
                <div className="text-xs text-gold font-medium">{unit.size}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal text-center mt-8 text-gray-500 text-sm">
          المساحات متنوعة حسب نوع وموقع الوحدة داخل المشروع - للتفاصيل الدقيقة
          يرجى التواصل مع فريق المبيعات
        </p>
      </div>
    </section>
  );
}
