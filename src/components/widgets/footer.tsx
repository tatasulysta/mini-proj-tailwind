import Link from "next/link";
import { useTranslation } from "react-i18next";

const year = new Date().getFullYear();

const LINKS = {
  sitemap: [
    { labelKey: "main.home", href: "/" },
    { labelKey: "main.features", href: "/features" },
    { labelKey: "main.project", href: "/project" },
    { labelKey: "main.pricing", href: "/pricing" },
  ],
  company: [
    { labelKey: "main.about", href: "/about" },
    { labelKey: "main.careers", href: "/careers" },
    { labelKey: "main.contact", href: "/contact" },
    { labelKey: "main.blog", href: "/blog" },
  ],
};
export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 pb-16 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-[#0F0A3E]"
            >
              clickManage
            </Link>
            <p className="max-w-sm text-lg text-gray-500 leading-relaxed">
              {t("main.footer.description")}
            </p>
          </div>
          <div className="lg:col-span-1" />
          <div className="flex flex-col gap-6 lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#0F0A3E]">
              {t("main.sitemap")}
            </h3>
            <div className="flex flex-col gap-4">
              {LINKS.sitemap.map((link) => (
                <Link
                  key={link.labelKey}
                  href={link.href}
                  className="text-gray-500 transition-colors hover:text-indigo-600"
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#0F0A3E]">
              {t("main.company")}
            </h3>
            <div className="flex flex-col gap-4">
              {LINKS.company.map((link) => (
                <Link
                  key={link.labelKey}
                  href={link.href}
                  className="text-gray-500 transition-colors hover:text-indigo-600"
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {year} clickManage. {t("main.footer.rights")}
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 transition-colors hover:text-[#0F0A3E]"
            >
              {t("main.footer.privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 transition-colors hover:text-[#0F0A3E]"
            >
              {t("main.footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
