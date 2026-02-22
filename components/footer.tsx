import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border py-6 px-6 text-center">
      <p className="text-gray-500 text-[13px]">
        تم التصميم والتطوير بواسطة{" "}
        <a
          href={siteConfig.footerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold-light no-underline transition-colors"
        >
          {siteConfig.footerCredit}
        </a>
      </p>
    </footer>
  );
}
