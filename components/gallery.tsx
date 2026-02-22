"use client";

import { useReveal } from "@/lib/use-reveal";

const galleryItems = [
  { label: "Villas & Pool", span: true },
  { label: "Townhouses", span: false },
  { label: "Twin Houses", span: false },
  { label: "Private Pool", span: false },
  { label: "Landscape", span: false },
];

export default function Gallery() {
  const ref = useReveal();

  return (
    <section className="py-24 px-6 bg-dark overflow-hidden" id="gallery" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal text-center">
          <div className="text-gold text-sm font-bold tracking-wider mb-3">
            معرض الصور
          </div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.3]">
            اكتشف Hyde Park Central
          </h2>
        </div>

        <div className="reveal grid grid-cols-2 lg:grid-cols-3 gap-3 mt-12">
          {galleryItems.map((item, i) => (
            <div
              key={item.label}
              className={`group rounded-xl overflow-hidden bg-dark-card border border-dark-border relative cursor-pointer ${
                i === 0
                  ? "col-span-2 row-span-2 min-h-[300px]"
                  : "aspect-[16/10]"
              }`}
            >
              <div className="w-full h-full bg-gradient-to-br from-dark-card to-dark flex items-center justify-center group-hover:scale-[1.08] transition-transform duration-500">
                <span className="text-gold/30 text-sm">{item.label}</span>
              </div>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
