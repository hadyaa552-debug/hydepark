"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { getPhoneUrl, getEmailUrl, getWhatsAppUrl } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

export default function Contact() {
  const ref = useReveal();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    unitType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `مرحباً، أنا ${formData.name}\nرقم الهاتف: ${formData.phone}\nمهتم بـ: ${formData.unitType}\nمن خلال موقع Hyde Park Central`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section className="py-24 px-6 bg-dark-bg" id="contact" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal text-center mb-12">
          <div className="text-gold text-sm font-bold tracking-wider mb-3">
            تواصل معنا
          </div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.3]">
            نحن هنا لمساعدتك
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Contact Info */}
          <div className="reveal pt-4">
            <div className="bg-dark-card border border-dark-border rounded-xl p-8">
              <h3 className="text-lg font-bold mb-6">معلومات الاتصال</h3>

              {[
                {
                  icon: Phone,
                  label: "هاتف",
                  value: siteConfig.phoneDisplay,
                  href: getPhoneUrl(),
                },
                {
                  icon: Mail,
                  label: "البريد الإلكتروني",
                  value: siteConfig.email,
                  href: getEmailUrl(),
                },
                {
                  icon: MessageCircle,
                  label: "واتساب",
                  value: siteConfig.phoneDisplay,
                  href: getWhatsAppUrl(),
                  external: true,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 mb-5 last:mb-0">
                  <div className="w-11 h-11 bg-gold/10 rounded-[10px] flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">
                      {item.label}
                    </div>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-white hover:text-gold text-base font-medium no-underline transition-colors"
                      dir="ltr"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal bg-dark-card border border-dark-border rounded-xl p-9">
            <h3 className="text-xl font-bold mb-7">سجل اهتمامك</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-[13px] text-gray-400 mb-2 font-medium">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="أدخل اسمك"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-[18px] py-3.5 bg-dark-bg border border-dark-border rounded-[10px] text-white text-[15px] outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] transition-all placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-[13px] text-gray-400 mb-2 font-medium">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="01xxxxxxxxx"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-[18px] py-3.5 bg-dark-bg border border-dark-border rounded-[10px] text-white text-[15px] outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-[13px] text-gray-400 mb-2 font-medium">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-[18px] py-3.5 bg-dark-bg border border-dark-border rounded-[10px] text-white text-[15px] outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] transition-all placeholder:text-gray-600"
                />
              </div>

              <div className="mb-5">
                <label className="block text-[13px] text-gray-400 mb-2 font-medium">
                  نوع الوحدة المهتم بها *
                </label>
                <select
                  required
                  value={formData.unitType}
                  onChange={(e) =>
                    setFormData({ ...formData, unitType: e.target.value })
                  }
                  className="w-full px-[18px] py-3.5 bg-dark-bg border border-dark-border rounded-[10px] text-white text-[15px] outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] transition-all"
                >
                  <option value="">اختر نوع الوحدة</option>
                  <option value="فيلا مستقلة">فيلا مستقلة</option>
                  <option value="توين هاوس">توين هاوس</option>
                  <option value="تاون هاوس">تاون هاوس</option>
                  <option value="شقة سكنية">شقة سكنية</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="block text-[13px] text-gray-400 mb-2 font-medium">
                  رسالتك (اختياري)
                </label>
                <input
                  type="text"
                  placeholder="أي تفاصيل إضافية..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-[18px] py-3.5 bg-dark-bg border border-dark-border rounded-[10px] text-white text-[15px] outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.1)] transition-all placeholder:text-gray-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-br from-gold to-gold-dark text-dark-bg border-none rounded-[10px] text-base font-extrabold cursor-pointer hover:from-gold-light hover:to-gold hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,168,76,0.3)] transition-all"
              >
                سجل اهتمامك
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
