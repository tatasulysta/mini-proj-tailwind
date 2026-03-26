import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button } from "../elements/button";
import { useLang, LangEnum } from "@/hooks/use-lang";

const LINKS = [
  { labelKey: "main.home", href: "/" },
  { labelKey: "main.features", href: "/features" },
  { labelKey: "main.pricing", href: "/pricing" },
  { labelKey: "main.blog", href: "/blog" },
  { labelKey: "main.contact", href: "/contact" },
];

interface LangBtnProps {
  lang: LangEnum;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onSelect: (nextLang: LangEnum) => void;
  t: (key: string) => string;
}

function LangBtn(props: LangBtnProps) {
  const { lang, isOpen, setIsOpen, onSelect, t } = props;
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 cursor-pointer items-center gap-2 rounded-lg border border-brand-primary/20 px-3 transition-colors hover:bg-brand-primary/5 active:bg-brand-primary/10"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <svg
          className="h-5 w-5 text-brand-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <span className="text-sm font-bold uppercase text-brand-primary">
          {lang}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 min-w-[180px] overflow-hidden rounded-xl shadow bg-white shadow-xl z-20">
            <button
              onClick={() => onSelect(LangEnum.English)}
              className={`w-full cursor-pointer px-6 py-4 text-left text-base font-semibold transition-colors hover:bg-muted ${
                lang === LangEnum.English
                  ? "text-brand-primary"
                  : "text-foreground"
              }`}
            >
              {t("common.en")}
            </button>
            <div className="h-[1px] w-full bg-border" />
            <button
              onClick={() => onSelect(LangEnum.Indonesian)}
              className={`w-full px-6 py-4 text-left text-base font-semibold transition-colors hover:bg-muted ${
                lang === LangEnum.Indonesian
                  ? "text-brand-primary"
                  : "text-foreground"
              }`}
            >
              {t("common.id")}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export function Header() {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { t } = useTranslation();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const toggleLanguage = (nextLang: LangEnum) => {
    setLang(nextLang);
    router.push({ pathname, query }, asPath, { locale: nextLang });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full  bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-4">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#0F0A1E]">
              clickManage
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <Link
                key={link.labelKey}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-brand-primary"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <LangBtn
            lang={lang}
            isOpen={open}
            setIsOpen={setOpen}
            onSelect={toggleLanguage}
            t={t}
          />

          <Button
            tag="a"
            variant="secondary"
            href="/login"
            className="hidden md:flex"
          >
            {t("common.login")}
          </Button>
          <Button tag="a" href="/get-started" className="hidden md:flex">
            {t("main.getStarted")}
          </Button>
        </div>
      </div>
    </header>
  );
}
