import { ReactElement } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Breakpoint, SxProps, Theme, styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppHeader, { AppHeaderOptions } from "../header/AppHeader";
import { AppHeaderComponents } from "../header/AppHeaderClasses";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  background: theme.palette.background.default,
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: 0,
  },
}));

export interface HeaderLayoutProps {
  headerOptions?: AppHeaderOptions;
  maxWidth?: Breakpoint | false;
  sx?: SxProps<Theme>;
  children: JSX.Element | JSX.Element[];
}

export interface HeaderLayoutComponents extends AppHeaderComponents {}

interface Props extends HeaderLayoutProps, HeaderLayoutComponents {}

export default function HeaderLayout({ maxWidth = "lg", sx, children, ...headerProps }: Props): ReactElement {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <StyledBox sx={{ ...sx }}>
      <AppHeader {...headerProps} />
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <StyledContainer maxWidth={maxWidth}>
          <Toolbar />
          <Box component="main" sx={{ mt: 2, px: isLgUp ? 10 : 0 }}>
            {children}
          </Box>
        </StyledContainer>
      </Box>
    </StyledBox>
  );
}
