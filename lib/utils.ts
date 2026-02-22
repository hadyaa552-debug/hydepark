import { siteConfig } from "./config";

export function getWhatsAppUrl(customMessage?: string) {
  const message = encodeURIComponent(
    customMessage || siteConfig.whatsappMessage
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${message}`;
}

export function getPhoneUrl() {
  return `tel:${siteConfig.phone}`;
}

export function getEmailUrl() {
  return `mailto:${siteConfig.email}`;
}

export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
