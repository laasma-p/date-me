import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import da from "./locales/da.json";
import lv from "./locales/lv.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "lv",
  resources: {
    en: { translation: en },
    da: { translation: da },
    lv: { translation: lv },
  },
});

export default i18n;
