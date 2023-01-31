import { ComponentType, ReactElement, useMemo, useState } from "react";
import BackArrow from "@mui/icons-material/ArrowBack";
import AvatarIcon from "@mui/icons-material/Person";
import MuiAppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
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

export default function AppHeader({ subheader, label, Menu, ProfileNode, onBack }: Props) {
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);
  const openProfile = Boolean(profileAnchorEl);
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  function handleProfileClick(event: React.MouseEvent<HTMLElement>) {
    setProfileAnchorEl(event.currentTarget);
  }

  function handleProfileClose() {
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
          <Stack spacing={1} direction="row" alignItems="center">
            {isSmUp && <Search sx={{ mr: 2 }} />}
            <Divider light orientation="vertical" flexItem />
            <ThemeToggle />
            <Divider light orientation="vertical" flexItem />
            <IconButton onClick={handleProfileClick}>
              <Badge color="info">
                <AvatarIcon color="primary" />
              </Badge>
            </IconButton>
            {ProfileComponent}
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
