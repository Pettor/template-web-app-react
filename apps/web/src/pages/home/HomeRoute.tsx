import type { ReactElement } from "react";
import { Box } from "@mui/material";
import { useIntl } from "react-intl";
import { useLoaderData, useRouteError } from "react-router-dom";
import { HomePage, type HomePageProps } from "./HomePage";

export function loader(): HomePageProps {
  return {
    url: "https://github.com/Pettor/template-web-app-react",
  };
}

export function Component(): ReactElement {
  const data = useLoaderData() as HomePageProps;
  return <HomePage {...data} />;
}
Component.displayName = "HomePage";

export function ErrorBoundary(): ReactElement {
  const intl = useIntl();
  const error = useRouteError() as Error;
  return (
    <Box>
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
    </Box>
  );
}
