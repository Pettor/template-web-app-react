import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { Breakpoint, SxProps, Theme, styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppHeader, { AppHeaderComponents, AppHeaderOptions } from "../header/AppHeader";

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

export interface HeaderLayoutComponents {
  headerComponents: AppHeaderComponents;
}

interface Props extends HeaderLayoutProps, HeaderLayoutComponents {}

export default function HeaderLayout({ headerOptions, maxWidth = "lg", sx, headerComponents, children }: Props) {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <StyledBox sx={{ ...sx }}>
      <AppHeader {...headerComponents} {...headerOptions} />
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
