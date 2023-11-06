import type { ReactElement } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function NotFoundPage(): ReactElement {
  const navigate = useNavigate();

  function handleClick(): void {
    navigate("/login");
  }

  return (
    <div>
      <h1>404 - Page could not be found</h1>
      <Button onClick={handleClick} variant="contained" color="primary">
        Click
      </Button>
    </div>
  );
}
