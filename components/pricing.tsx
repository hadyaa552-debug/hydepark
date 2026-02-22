"use client";

import { DollarSign, PlusSquare, Calendar, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

const pricingCards = [
  {
    icon: DollarSign,
    title: "أنظمة سداد مرنة",
    description: "مقدم + دفعات وأقساط طويلة الأجل",
  },
  {
    icon: PlusSquare,
    title: "تسهيلات متنوعة",
    description: "خطط سداد تناسب احتياجاتك المالية",
  },
  {
    icon: Calendar,
    title: "موعد التسليم",
    description: "يختلف حسب المرحلة",
  },
];

export default function Pricing() {
  const ref = useReveal();

  return (
    <section className="py-24 px-6 bg-dark relative overflow-hidden" id="pricing" ref={ref}>
      <div className="absolute -top-[200px] -left-[200px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(201,168,76,0.06),transparent)] rounded-full" />

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <div className="reveal">
          <div className="text-gold text-sm font-bold tracking-wider mb-3">
            الأسعار وأنظمة السداد
          </div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold mb-5 leading-[1.3]">
            أنظمة سداد مرنة
          </h2>
          <p className="text-gray-400 text-[17px] mx-auto max-w-[700px]">
            للحصول على الأسعار الدقيقة والتفاصيل الكاملة، يرجى التواصل مع فريق
            المبيعات
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-10 max-w-[900px] mx-auto">
          {pricingCards.map((card) => (
            <div
              key={card.title}
              className="bg-dark-card border border-dark-border rounded-xl px-7 py-9 text-center hover:border-gold/40 transition-all"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                <card.icon size={24} className="text-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="reveal">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-12 py-4 rounded-[10px] text-lg font-bold bg-whatsapp text-white hover:bg-[#20BD5A] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.3)] transition-all no-underline"
          >
            <MessageCircle size={20} />
            استفسر عن التفاصيل والأسعار
          </a>
          <p className="mt-6 text-gray-500 text-[13px]">
            الأسعار وأنظمة السداد تختلف حسب نوع الوحدة والمساحة والموقع داخل
            المشروع
          </p>
        </div>
      </div>
    </section>
  );
}
