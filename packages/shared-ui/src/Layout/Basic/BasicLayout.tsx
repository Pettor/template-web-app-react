import type { ReactElement } from "react";
import { Box, Container } from "@mui/material";
import type { SxProps } from "@mui/material";
import { BasicLayoutContainer } from "./BasicLayoutContainer";
import { BasicLayoutContent } from "./BasicLayoutContent";

interface Props {
  sx?: SxProps;
  children: JSX.Element | JSX.Element[];
}

export function BasicLayout({ sx, children }: Props): ReactElement {
  return (
    <BasicLayoutContainer>
      <Container maxWidth="xs" sx={sx}>
        <BasicLayoutContent>
          <Box component="main" sx={{ mt: 4, width: "100%" }}>
            {children}
          </Box>
        </BasicLayoutContent>
      </Container>
    </BasicLayoutContainer>
  );
}
