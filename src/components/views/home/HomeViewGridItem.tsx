import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const HomeViewGridItem = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  height: "100%",
  padding: theme.spacing(4),
  textAlign: "left",
  color: theme.palette.text.secondary,
  background: `${theme.palette.background.paper}ba`,
  borderRadius: "12px",
}));

export default HomeViewGridItem;
