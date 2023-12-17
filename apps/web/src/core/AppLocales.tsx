import type { ReactElement } from "react";
import type { MessageFormatElement } from "react-intl";
import { IntlProvider } from "react-intl";

interface Props {
  children: ReactElement;
}

const locale = navigator.language;

export function AppLocales({ children }: Props): ReactElement {
  function loadLocaleData(): Record<string, MessageFormatElement[]> {
    switch (locale) {
      case "en":
      default:
        return {};
    }
  }

  return (
    <IntlProvider locale="en" defaultLocale="en" messages={loadLocaleData()}>
      {children}
    </IntlProvider>
  );
}
