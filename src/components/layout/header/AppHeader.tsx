import { Key, ReactElement, useMemo } from "react";
import BackArrow from "@mui/icons-material/ArrowBack";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../library/logo/Logo";
import {
  HeaderComponent,
  IconHeaderComponent,
  isClickableIconComponent,
  isIconComponent,
  isStaticComponent,
} from "./AppHeaderComponent";
import AppHeaderIconComponent from "./AppHeaderIconComponent";

interface AppHeaderComponentOptions {
  flexItem?: boolean;
  fill?: boolean;
}

export interface AppHeaderComponent {
  key: Key;
  component: HeaderComponent;
}

export interface AppHeaderOptions {
  subheader?: boolean;
  label?: string;
  onBack?(): void;
}

export interface AppHeaderComponents {
  headerComponents?: AppHeaderComponent[];
  headerComponentOptions?: AppHeaderComponentOptions;
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

function parseIconComponent(key: Key, iconComponent: IconHeaderComponent): ReactElement | ReactElement[] {
  if (isClickableIconComponent(iconComponent)) {
    const { icon, onIconClick } = iconComponent;
    return (
      <IconButton key={key} onClick={onIconClick}>
        {icon}
      </IconButton>
    );
  }

  const { icon, MenuNode } = iconComponent;
  return <AppHeaderIconComponent key={key} icon={icon} MenuNode={MenuNode} />;
}

function parseComponent(key: Key, component?: HeaderComponent, isMobile = false): ReactElement | ReactElement[] {
  if (!component) {
    console.log("ME GONE");
    return <></>;
  }

  if (isStaticComponent(component)) {
    return (
      <Box key={key} sx={{ width: "-webkit-fill-available" }}>
        {component}
      </Box>
    );
  }

  if (isIconComponent(component)) {
    return parseIconComponent(key, component);
  }

  const { mobile, desktop } = component;
  if (isMobile) {
    return parseComponent(key, mobile);
  }

  return parseComponent(key, desktop);
}

export default function AppHeader({
  isMobile,
  subheader,
  label,
  headerComponents: headerComponents,
  headerComponentOptions: headerComponentOptions,
  onBack,
}: Props): ReactElement {
  const { flexItem, fill } = headerComponentOptions || { flexItem: false, fill: false };

  const HeaderComponents = useMemo(() => {
    if (!headerComponents) {
      return <></>;
    }

    return headerComponents.map((component) => {
      const { key, component: headerComponent } = component;
      return parseComponent(key, headerComponent, isMobile ?? false);
    });
  }, [headerComponents, isMobile]);

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
            {HeaderComponents}
          </CustomComponentsContainer>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
