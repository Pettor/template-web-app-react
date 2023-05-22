import type { ReactElement } from "react";
import type { StyledComponent } from "@emotion/styled";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledBox: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
  border: "1px solid",
  borderRadius: 10,
  background: theme.palette.background.default,
  padding: theme.spacing(2),
}));

interface Props {
  label: string;
  children: React.ReactNode;
}

export function DocumentationLayout({ label, children }: Props): ReactElement {
  return (
    <Box>
      <Typography variant="h1">{label}</Typography>
      <br />
      <StyledBox>{children}</StyledBox>
    </Box>
  );
}
