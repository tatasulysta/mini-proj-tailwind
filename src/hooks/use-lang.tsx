import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { setDefaultOptions } from "date-fns";
import { id as idLocale, enUS as enLocale } from "date-fns/locale";
import i18n from "@/locales";

export enum LangEnum {
  English = "en",
  Indonesian = "id",
}

const STORAGE_KEY = "clickManage-lang";

interface ContextType {
  lang: LangEnum;
  setLang: (lang: LangEnum) => void;
}

const LangContext = createContext<ContextType>({
  lang: LangEnum.English,
  setLang: () => {},
});

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize state from localStorage if available (client-side only)
  const [lang, setLangInternal] = useState<LangEnum>(LangEnum.English);
  const [isInitialized, setIsInitialized] = useState(false);

  const applyLang = useCallback((_lang: LangEnum) => {
    switch (_lang) {
      case LangEnum.Indonesian:
        setDefaultOptions({ locale: idLocale });
        i18n.changeLanguage(LangEnum.Indonesian);
        break;
      case LangEnum.English:
      default:
        setDefaultOptions({ locale: enLocale });
        i18n.changeLanguage(LangEnum.English);
        break;
    }
  }, []);

  const setLang = useCallback(
    (newLang: LangEnum) => {
      setLangInternal(newLang);
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, newLang);
      }
      applyLang(newLang);
    },
    [applyLang],
  );

  useEffect(() => {
    const storedLang = localStorage.getItem(STORAGE_KEY) as LangEnum;
    if (
      storedLang &&
      Object.values(LangEnum).includes(storedLang) &&
      storedLang !== lang
    ) {
      setLangInternal(storedLang as LangEnum);
      applyLang(storedLang);
    } else {
      applyLang(lang);
    }
    setIsInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isInitialized) return <>{children}</>;

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
