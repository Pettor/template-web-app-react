import { styled } from "@mui/material/styles";

const HomeViewTitle = styled("span")(({ theme }) => ({
  ...theme.typography.h1,
  background: theme.customBackgrounds.gradients.linear.variation1,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
}));

export default HomeViewTitle;
