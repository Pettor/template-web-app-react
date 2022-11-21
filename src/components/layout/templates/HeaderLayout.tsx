import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { Breakpoint, SxProps, Theme, styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppHeader, { AppHeaderOptions } from "../header/AppHeader";
import { IInjectedMenu } from "../menu/IInjectedMenu";

export interface HeaderLayoutProps {
  headerOptions?: AppHeaderOptions;
  maxWidth?: Breakpoint | false;
  sx?: SxProps<Theme> | undefined;
  children: JSX.Element | JSX.Element[];
}

export interface IHeaderLayout {
  injectedMenu: IInjectedMenu;
}

type Props = HeaderLayoutProps & IHeaderLayout;

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

function HeaderLayout({ headerOptions, maxWidth = "lg", sx, injectedMenu, children }: Props) {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <StyledBox sx={{ ...sx }}>
      <AppHeader menu={injectedMenu} {...headerOptions} />
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

export default HeaderLayout;
