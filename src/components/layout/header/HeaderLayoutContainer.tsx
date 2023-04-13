import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const HeaderLayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  background: theme.palette.background.default,
}));

export default HeaderLayoutContainer;
