import type { ReactElement } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import type { SxProps } from "@mui/material/styles";
import BasicLayoutContainer from "./BasicLayoutContainer";
import BasicLayoutContent from "./BasicLayoutContent";

interface Props {
  sx?: SxProps;
  children: JSX.Element | JSX.Element[];
}

export default function BasicLayout({ sx, children }: Props): ReactElement {
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
