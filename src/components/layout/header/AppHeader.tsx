import { ComponentType, ReactElement, useMemo, useState } from "react";
import BackArrow from "@mui/icons-material/ArrowBack";
import MenuIcon from "@mui/icons-material/MoreVert";
import AvatarIcon from "@mui/icons-material/Person";
import MuiAppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "../../library/logo/Logo";
import Search from "../../library/search/Search";
import { ThemeToggleExt } from "../../library/toggle/theme-toggle/ThemeToggleExt";
import { MenuOptions } from "../menu/MenuOptions";

export interface AppHeaderOptions {
  subheader?: boolean;
  label?: string;
  onBack?(): void;
}

export interface AppHeaderComponents {
  Menu: ComponentType<MenuOptions>;
  MenuNode: ReactElement | ReactElement[];
  ProfileNode: ReactElement | ReactElement[];
}

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  background: `${theme.palette.background.default}b0`,
  zIndex: theme.zIndex.drawer + 1,
  backdropFilter: "saturate(50%) blur(8px)",
}));

interface Props extends AppHeaderComponents, AppHeaderOptions {}

function AppHeader({ subheader, label, Menu, MenuNode, ProfileNode, onBack }: Props) {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = Boolean(menuAnchorEl);
  const openProfile = Boolean(profileAnchorEl);

  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const MenuComponent = useMemo(() => {
    if (!Menu) {
      return <></>;
    }

    return (
      <Menu key="app-header-menu" open={openMenu} anchorEl={menuAnchorEl} handleClose={handleMenuClose}>
        {MenuNode}
      </Menu>
    );
  }, [Menu, openMenu]);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const ProfileComponent = useMemo(() => {
    if (!ProfileNode) {
      return <></>;
    }

    return (
      <Menu key="app-profile-menu" open={openProfile} anchorEl={profileAnchorEl} handleClose={handleProfileClose}>
        {ProfileNode}
      </Menu>
    );
  }, [ProfileNode, openProfile]);

  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar disableGutters>
        <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center" }}>
          {!subheader && isSmUp && <Logo size="small" />}
          {subheader && (
            <IconButton onClick={onBack}>
              <BackArrow />
            </IconButton>
          )}
          <Divider sx={{ mx: 1 }} />
          <Typography component="h1" variant="h6" color="primary" noWrap sx={{ flexGrow: 1 }}>
            {label}
          </Typography>
          {isSmUp && <Search />}
          <Divider sx={{ mx: 2 }} />
          <ThemeToggleExt />
          <IconButton onClick={handleProfileClick}>
            <Badge badgeContent={2} color="info">
              <AvatarIcon color="primary" />
            </Badge>
          </IconButton>
          {ProfileComponent}
          <IconButton onClick={handleMenuClick} color="primary">
            <MenuIcon />
          </IconButton>
          {MenuComponent}
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
