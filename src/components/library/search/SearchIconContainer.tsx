import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const SearchIconContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default SearchIconContainer;
