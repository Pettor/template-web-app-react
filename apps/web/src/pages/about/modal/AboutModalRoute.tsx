import type { ReactElement } from "react";
import { useIntl } from "react-intl";
import { useLoaderData, useRouteError } from "react-router-dom";
import { AboutModalPage } from "./AboutModalPage";
import type { AboutDetailsProps } from "~/components/feedback/about-details/AboutDetails";

export function Component(): ReactElement {
  const data = useLoaderData() as AboutDetailsProps;
  return <AboutModalPage {...data} />;
}
Component.displayName = "AboutPage";

export function ErrorBoundary(): ReactElement | null {
  const intl = useIntl();
  const error = useRouteError() as Error;
  return (
    <div>
      {intl.formatMessage(
        {
          description: "AboutModalPage - ErrorBoundary",
          defaultMessage: "Error: {error}",
          id: "2+092K",
        },
        {
          error: error.message,
        }
      )}
    </div>
  );
}
ErrorBoundary.displayName = "AboutPageError";
