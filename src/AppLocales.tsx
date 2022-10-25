import { IntlProvider } from "react-intl";
import en from "../locale/compiled/en.json";
import sv from "../locale/compiled/sv.json";

interface Props {
  children: React.ReactNode;
}

const locale = navigator.language;

export default function AppLocales({ children }: Props) {
  function loadLocaleData() {
    switch (locale) {
      case "sv":
        return sv;
      default:
        return en;
    }
  }

  return (
    <IntlProvider locale={locale} defaultLocale="en" messages={loadLocaleData()}>
      {children}
    </IntlProvider>
  );
}
