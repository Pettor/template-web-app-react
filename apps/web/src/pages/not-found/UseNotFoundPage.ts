import { useNavigate } from "react-router-dom";

export function useNotFoundPage(): {
  handleClick: () => void;
} {
  const navigate = useNavigate();

  function handleClick(): void {
    navigate("/login");
  }

  return {
    handleClick,
  };
}
