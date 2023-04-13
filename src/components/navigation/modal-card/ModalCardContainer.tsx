import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

const ModalCardContainer = styled(Card)(({ theme }) => ({
  height: "100%",
  minHeight: "inherit",
  width: "80vw",
  maxWidth: "1000px",
  borderRadius: theme.borderRadius.default,

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export default ModalCardContainer;
