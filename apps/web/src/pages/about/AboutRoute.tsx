import type { ReactElement } from "react";
import { Box } from "@mui/material";
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
  return <Box>{error.message}</Box>;
}
ErrorBoundary.displayName = "AboutPageError";
