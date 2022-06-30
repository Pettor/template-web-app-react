import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { Breakpoint, SxProps, Theme, styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppHeader from "../header/AppHeader";
import { IInjectedMenu } from "../menu/IInjectedMenu";

export interface MainLayoutProps {
  maxWidth?: Breakpoint | false;
  sx?: SxProps<Theme> | undefined;
  label: string;
  children: JSX.Element | JSX.Element[];
}

type Props = MainLayoutProps & {
  injectedMenu: IInjectedMenu;
};

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

const HeaderLayout = ({ maxWidth = "lg", sx, label, injectedMenu, children }: Props) => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <StyledBox sx={{ ...sx }}>
      <AppHeader label={label} menu={injectedMenu} />
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
};

export default HeaderLayout;
