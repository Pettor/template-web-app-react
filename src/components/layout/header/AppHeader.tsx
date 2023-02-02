import { ComponentType, ReactElement, useMemo, useState } from "react";
import BackArrow from "@mui/icons-material/ArrowBack";
import MuiAppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Logo from "../../library/logo/Logo";
import Search from "../../library/search/Search";
import ThemeToggle from "../../library/toggle/theme-toggle/ThemeToggleExt";
import { MenuOptions } from "../menu/MenuOptions";

export interface AppHeaderOptions {
  subheader?: boolean;
  label?: string;
  onBack?(): void;
}

export interface AppHeaderComponents {
  Menu: ComponentType<MenuOptions>;
  ProfileNode: ReactElement | ReactElement[];
}

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  background: `${theme.palette.background.default}b0`,
  zIndex: theme.zIndex.drawer + 1,
  backdropFilter: "saturate(50%) blur(8px)",
}));

interface Props extends AppHeaderComponents, AppHeaderOptions {}

export default function AppHeader({ subheader, label, Menu, ProfileNode, onBack }: Props): ReactElement {
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);
  const openProfile = Boolean(profileAnchorEl);

  function handleProfileClick(event: React.MouseEvent<HTMLElement>): void {
    setProfileAnchorEl(event.currentTarget);
  }

  function handleProfileClose(): void {
    setProfileAnchorEl(null);
  }

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
          {!subheader && <Logo size="small" />}
          {subheader && (
            <IconButton onClick={onBack}>
              <BackArrow />
            </IconButton>
          )}
          <Divider sx={{ mx: 1, display: { xs: "none", md: "flex" } }} />
          <Typography component="h1" variant="h6" color="primary" noWrap sx={{ flexGrow: 1 }}>
            {label}
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Stack spacing={1} direction="row" alignItems="center">
              <Search sx={{ mr: 2 }} />
              <Divider light orientation="vertical" flexItem />
              <ThemeToggle />
              <Divider light orientation="vertical" flexItem />
            </Stack>
          </Box>
          <IconButton onClick={handleProfileClick} sx={{ ml: 1 }}>
            <Avatar sx={{ width: 32, height: 32 }} />
          </IconButton>
          {ProfileComponent}
        </Container>
      </Toolbar>
    </AppBar>
  );
}
