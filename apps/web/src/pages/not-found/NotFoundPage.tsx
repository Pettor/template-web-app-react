import type { ReactElement } from "react";
import { Button } from "@mui/material";
import { useNotFoundPage } from "./UseNotFoundPage";

export function NotFoundPage(): ReactElement {
  const { handleClick } = useNotFoundPage();

  return (
    <div>
      <h1>404 - Page could not be found</h1>
      <Button onClick={handleClick} variant="contained" color="primary">
        Click
      </Button>
    </div>
  );
}
