"use client";

import {
  Trees,
  Store,
  ShieldCheck,
  Baby,
  UtensilsCrossed,
  Bike,
  Dumbbell,
  Waves,
  MapPin,
} from "lucide-react";
import { features } from "@/lib/config";
import { useReveal } from "@/lib/use-reveal";

const amenityItems = [
  { icon: Trees, label: "حدائق ومساحات خضراء" },
  { icon: Store, label: "مرافق خدمية وتجارية" },
  { icon: ShieldCheck, label: "أمن وحراسة 24/7" },
  { icon: Baby, label: "مناطق لعب الأطفال" },
  { icon: UtensilsCrossed, label: "مقاهي ومطاعم" },
  { icon: Bike, label: "مسارات مشي ودراجات" },
  { icon: Dumbbell, label: "نوادي رياضية" },
  { icon: Waves, label: "حمامات سباحة" },
  { icon: MapPin, label: "موقع استراتيجي" },
];

export default function Amenities() {
  const ref = useReveal();

  return (
    <section className="py-24 px-6 bg-dark-bg" id="amenities" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal text-center">
          <div className="text-gold text-sm font-bold tracking-wider mb-3">
            المميزات والخدمات
          </div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold mb-5 leading-[1.3]">
            حياة متكاملة من الرفاهية
          </h2>
          <p className="text-gray-400 text-[17px] mx-auto max-w-[700px]">
            خدمات ومرافق متكاملة توفر أعلى مستويات الراحة والرفاهية لك ولعائلتك
          </p>
        </div>

        {/* Amenities grid */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {amenityItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3.5 px-5 py-[18px] bg-dark-card border border-dark-border rounded-[10px] hover:border-gold/30 hover:-translate-y-0.5 transition-all"
            >
              <div className="w-9 h-9 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                <item.icon size={16} className="text-gold" />
              </div>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-dark-card border border-dark-border rounded-xl px-6 py-8 text-center hover:border-gold transition-all"
            >
              <h3 className="text-[17px] font-bold mb-2 text-gold-light">
                {feature.title}
              </h3>
              <p className="text-[13px] text-gray-500 leading-[1.7]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
