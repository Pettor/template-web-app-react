import type { ReactElement } from "react";
import { useIntl } from "react-intl";
import { Outlet, useLoaderData, useRouteError } from "react-router-dom";
import { HomePage, type HomePageProps } from "./HomePage";

export function Component(): ReactElement {
  const data = useLoaderData() as HomePageProps;
  return (
    <>
      <HomePage {...data} />
      <Outlet />
    </>
  );
}
Component.displayName = "HomePage";

export function ErrorBoundary(): ReactElement {
  const intl = useIntl();
  const error = useRouteError() as Error;
  return (
    <div>
      {intl.formatMessage(
        {
          description: "HomePage - ErrorBoundary",
          defaultMessage: "Error: {error}",
          id: "nk70ja",
        },
        {
          error: error.message,
        }
      )}
    </div>
  );
}
