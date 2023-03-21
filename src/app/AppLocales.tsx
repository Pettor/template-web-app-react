import type { ReactElement } from "react";
import type { MessageFormatElement } from "react-intl";
import { IntlProvider } from "react-intl";
import en from "../../locale/compiled/en.json";

interface Props {
  children: React.ReactNode;
}

const locale = navigator.language;

export default function AppLocales({ children }: Props): ReactElement {
  function loadLocaleData(): Record<string, MessageFormatElement[]> {
    switch (locale) {
      case "en":
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
