import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./Language/en/english.json";
import sp from "./Language/sp/Spanish.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    sp: { translation: sp },
  },
  fallbackLng: "en", 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
