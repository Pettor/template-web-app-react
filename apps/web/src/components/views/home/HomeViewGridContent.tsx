import type { StyledComponent } from "@emotion/styled";
import { Grid } from "@mui/material";
import type { GridProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HomeViewGridContent: StyledComponent<GridProps> = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}));
