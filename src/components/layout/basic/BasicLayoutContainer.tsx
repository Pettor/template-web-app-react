import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const BasicLayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  background: theme.palette.background.default,
}));

export default BasicLayoutContainer;
