import { ComponentType, ReactElement, ReactNode, useMemo, useState } from "react";
import BackArrow from "@mui/icons-material/ArrowBack";
import MuiAppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { joinChildren } from "../../../libs/react/JoinChildren";
import Logo from "../../library/logo/Logo";
import { MenuOptions } from "../menu/MenuOptions";

interface AppHeaderComponentOptions {
  flexItem?: boolean;
  fill?: boolean;
}

export interface AppHeaderComponent {
  name: string;
  icon: ReactNode;
  Node?: ReactElement | ReactElement[];
  responsive: boolean;
  onClick?(): void;
}

export interface AppHeaderOptions {
  subheader?: boolean;
  label?: string;
  onBack?(): void;
}

export interface AppHeaderComponents {
  Menu?: ComponentType<MenuOptions>;
  ProfileNode?: ReactElement | ReactElement[];
  customComponents?: AppHeaderComponent[];
  customComponentOptions?: AppHeaderComponentOptions;
}

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  background: `${theme.palette.background.default}b0`,
  zIndex: theme.zIndex.drawer + 1,
  backdropFilter: "saturate(50%) blur(8px)",
}));

const CustomComponentsContainer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "flexItem",
})<AppHeaderComponentOptions>(({ flexItem }) => ({
  flex: flexItem ? 1 : "none",
}));

interface Props extends AppHeaderComponents, AppHeaderOptions {
  isMobile?: boolean;
}

export default function AppHeader({
  isMobile,
  subheader,
  label,
  Menu,
  ProfileNode,
  customComponents,
  customComponentOptions,
  onBack,
}: Props) {
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);
  const openProfile = Boolean(profileAnchorEl);
  const { flexItem, fill } = customComponentOptions || { flexItem: false, fill: false };

  function handleProfileClick(event: React.MouseEvent<HTMLElement>) {
    setProfileAnchorEl(event.currentTarget);
  }

  function handleProfileClose() {
    setProfileAnchorEl(null);
  }

  const CustomComponentsNode = useMemo(() => {
    if (!customComponents) {
      return <></>;
    }

    return customComponents.map((component) => {
      const { name, Node, icon, responsive, onClick } = component;

      if ((isMobile && responsive) || !Node) {
        return (
          <IconButton key={name} onClick={onClick}>
            {icon}
          </IconButton>
        );
      }

      return joinChildren(Node, <Divider light orientation="vertical" flexItem />);
    });
  }, [customComponents, isMobile, flexItem]);

  const ProfileComponent = useMemo(() => {
    if (!ProfileNode || !Menu) {
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
          <Divider sx={{ mx: 1, display: isMobile ? "none" : "flex" }} />
          {!fill && (
            <Typography component="h1" variant="h6" color="primary" noWrap sx={{ flexGrow: 1 }}>
              {label}
            </Typography>
          )}

          <CustomComponentsContainer flexItem={flexItem} spacing={2} direction="row" alignItems="center">
            {CustomComponentsNode}
          </CustomComponentsContainer>
          {!subheader && (
            <IconButton onClick={handleProfileClick} sx={{ ml: 1 }}>
              <Avatar sx={{ width: 32, height: 32 }} />
            </IconButton>
          )}
          {ProfileComponent}
        </Container>
      </Toolbar>
    </AppBar>
  );
}
