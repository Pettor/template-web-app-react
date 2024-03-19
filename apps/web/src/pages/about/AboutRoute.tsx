import type { ReactElement } from "react";
import { useIntl } from "react-intl";
import { useLoaderData } from "react-router-dom";
import { AboutPage, type AboutPageProps } from "./AboutPage";
export { AboutPage } from "./AboutPage";

export function Component(): ReactElement {
  const data = useLoaderData() as AboutPageProps;
  return <AboutPage {...data} />;
}
Component.displayName = "AboutPage";

export function ErrorBoundary(): ReactElement | null {
  const intl = useIntl();
  return (
    <AboutPage
      serverVersion={intl.formatMessage({
        description: "AbourPage - Error server version N/A",
        defaultMessage: "N/A",
        id: "tDfYMW",
      })}
    />
  );
}
ErrorBoundary.displayName = "AboutPageError";
