"use client";

import { MapPin } from "lucide-react";
import { landmarks } from "@/lib/config";
import { useReveal } from "@/lib/use-reveal";

export default function Location() {
  const ref = useReveal();

  return (
    <section className="py-24 px-6 bg-dark" id="location" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <div className="text-gold text-sm font-bold tracking-wider mb-3">
              الموقع الاستراتيجي
            </div>
            <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold mb-5 leading-[1.3]">
              في قلب التجمع السادس
            </h2>
            <p className="text-gray-400 text-[17px] leading-[1.8] max-w-[700px]">
              موقع استراتيجي يوفر سهولة الوصول لجميع الخدمات الحيوية والترفيهية
              والتعليمية والتجارية في القاهرة الجديدة.
            </p>

            <div className="text-gold text-sm font-bold tracking-wider mt-8 mb-4">
              قريب من
            </div>

            <div className="grid gap-3">
              {landmarks.map((landmark) => (
                <div
                  key={landmark}
                  className="flex items-center gap-4 px-5 py-4 bg-gold/[0.04] border border-dark-border rounded-[10px] hover:border-gold/30 hover:bg-gold/[0.08] transition-all"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <span className="text-[15px] text-gray-400">{landmark}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 px-5 py-4 bg-gold/[0.06] border-r-[3px] border-gold rounded-l-lg text-gray-400 text-sm">
              عند نهاية شارع التسعين الجنوبي وقرب الطريق الدائري الأوسط
            </div>
          </div>

          {/* Map placeholder */}
          <div className="reveal bg-dark-card border border-dark-border rounded-xl min-h-[400px] h-full flex flex-col items-center justify-center gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(201,168,76,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <MapPin size={48} className="text-gold/50" />
            <p className="text-gray-500 text-[15px]">
              التجمع السادس - نيو كايرو
            </p>
            <p className="text-gray-600 text-xs">القاهرة الجديدة، مصر</p>
          </div>
        </div>
      </div>
    </section>
  );
}
