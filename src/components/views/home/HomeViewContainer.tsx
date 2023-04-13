import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const HomeViewContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  position: "relative",
  width: "100%",
  overflow: "auto",
}));

export default HomeViewContainer;
