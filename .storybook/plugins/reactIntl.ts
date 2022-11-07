import en from "../../locale/compiled/en.json";
import sv from "../../locale/compiled/sv.json";

const locales = ["en", "sv"];

const messages = {
  en: en,
  sv: sv,
};

export const reactIntl = {
  defaultLocale: "en",
  locales,
  messages,
};
