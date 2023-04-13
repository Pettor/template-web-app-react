import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const BasicLayoutContent = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(2),
  },

  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(0),
  },
}));

export default BasicLayoutContent;
