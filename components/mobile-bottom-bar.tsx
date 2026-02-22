import { MessageCircle, Phone } from "lucide-react";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/utils";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 right-0 left-0 z-[999] bg-dark-bg/95 backdrop-blur-[20px] border-t border-dark-border px-4 py-3">
      <div className="flex gap-2.5">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[10px] text-sm font-bold bg-whatsapp text-white no-underline transition-all"
        >
          <MessageCircle size={18} />
          واتساب
        </a>
        <a
          href="#contact"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[10px] text-sm font-bold bg-gradient-to-br from-gold to-gold-dark text-dark-bg no-underline transition-all"
        >
          سجل اهتمامك
        </a>
        <a
          href={getPhoneUrl()}
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[10px] text-sm font-bold bg-transparent text-gold-light border border-gold/40 no-underline transition-all"
        >
          <Phone size={18} />
          اتصل
        </a>
      </div>
    </div>
  );
}
