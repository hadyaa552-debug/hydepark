import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[90px] left-6 z-[998] w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] transition-all no-underline"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}
