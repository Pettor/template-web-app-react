import type { StyledComponent } from "@emotion/styled";
import { Container } from "@mui/material";
import type { ContainerProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeaderLayoutContent: StyledComponent<ContainerProps> = styled(Container)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: 0,
  },
}));
