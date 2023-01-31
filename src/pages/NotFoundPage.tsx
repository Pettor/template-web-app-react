import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 - Page could not be found</h1>
      <Button onClick={() => navigate("/login")} variant="contained" color="primary">
        Click
      </Button>
    </div>
  );
}
