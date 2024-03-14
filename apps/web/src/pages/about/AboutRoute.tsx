import type { ReactElement } from "react";
import { useLoaderData, useRouteError } from "react-router-dom";
import { AboutPage, type AboutPageProps } from "./AboutPage";
export { AboutPage } from "./AboutPage";

export function Component(): ReactElement {
  const data = useLoaderData() as AboutPageProps;
  return <AboutPage {...data} />;
}
Component.displayName = "AboutPage";

export function ErrorBoundary(): ReactElement | null {
  const error = useRouteError() as Error;
  return <div>{error.message}</div>;
}
ErrorBoundary.displayName = "AboutPageError";
