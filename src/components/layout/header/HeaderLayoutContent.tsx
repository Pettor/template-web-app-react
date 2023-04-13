import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const HeaderLayoutContent = styled(Container)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: 0,
  },
}));

export default HeaderLayoutContent;
