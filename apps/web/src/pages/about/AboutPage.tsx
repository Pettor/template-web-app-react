import type { ReactElement } from "react";
import { isRouteErrorResponse, useLoaderData, useNavigate, useRouteError } from "react-router-dom";

export function loader(): string {
  return "string";
}

export function Component(): ReactElement {
  const data = useLoaderData() as string;

  return <h1>About Page: {data}</h1>;
}
Component.displayName = "AboutPageRoute";

export function ErrorBoundary(): ReactElement | null {
  const navigate = useNavigate();
  const error = useRouteError() as Error;

  function handleClick(): void {
    navigate(-1);
  }

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data}</p>
      <button onClick={handleClick}>&larr; Go back</button>
    </div>
  );
}
ErrorBoundary.displayName = "AboutPageError";
