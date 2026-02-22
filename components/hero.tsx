import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a1a] via-[#0a1a2a] to-[#1a1a2a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(201,168,76,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(201,168,76,0.05)_0%,transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-[120px] pb-20 max-w-[900px]">
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 px-5 py-2 rounded-full text-[13px] text-gold-light mb-8 animate-fade-in-up">
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-[pulse-dot_2s_infinite]" />
          مشروع سكني متكامل في التجمع السادس
        </div>

        <h1 className="font-[var(--font-playfair)] text-[clamp(48px,8vw,96px)] font-bold tracking-wider leading-[1.1] mb-2 animate-fade-in-up animate-delay-1" style={{ fontFamily: "var(--font-playfair)" }}>
          Hyde Park Central
        </h1>

        <p className="text-[clamp(24px,4vw,40px)] font-light text-gold-light mb-6 animate-fade-in-up animate-delay-2">
          {siteConfig.nameAr}
        </p>

        <p className="text-[clamp(16px,2.5vw,22px)] text-gray-400 font-light mb-3 animate-fade-in-up animate-delay-3">
          عيش حياة الرفاهية في قلب التجمع السادس
        </p>

        <p className="text-sm text-gray-600 mb-12 animate-fade-in-up animate-delay-4">
          by <span className="text-gold" style={{ fontFamily: "var(--font-playfair)" }}>{siteConfig.developer}</span>
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up animate-delay-5">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-[10px] text-base font-bold bg-whatsapp text-white hover:bg-[#20BD5A] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,211,102,0.3)] transition-all no-underline"
          >
            <MessageCircle size={20} />
            تواصل عبر واتساب
          </a>
          <a
            href={getPhoneUrl()}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-[10px] text-base font-bold bg-transparent text-gold-light border border-gold/40 hover:bg-gold/10 hover:border-gold hover:-translate-y-0.5 transition-all no-underline"
          >
            <Phone size={18} />
            اتصل الآن
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs animate-[bounce-scroll_2s_infinite]">
        <span>اكتشف المزيد</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
