import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const AppHeaderGroupContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

export default AppHeaderGroupContent;
