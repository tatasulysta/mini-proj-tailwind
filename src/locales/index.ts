import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// EN
import en from "./en";

//ID
import id from "./id";

const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  ns: ["translation"],
  defaultNS: "translation",
});

export default i18n;
