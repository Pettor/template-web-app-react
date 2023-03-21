import type { ComponentProps, Key, ReactElement } from "react";
import { useMemo } from "react";
import BackArrow from "@mui/icons-material/ArrowBack";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../library/logo/Logo";
import ElevationScroll from "../scrolling/ElevationScroll";
import type {
  AppHeaderComponentOptions,
  AppHeaderComponents,
  HeaderComponent,
  IconHeaderComponent,
} from "./AppHeaderClasses";
import { isClickableIconComponent, isIconComponent, isStaticComponent } from "./AppHeaderClasses";
import AppHeaderIconComponent from "./AppHeaderIconComponent";

export interface AppHeaderOptions {
  subheader?: boolean;
  label?: string;
  onBack?(): void;
}

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["background", "box-shadow"], { duration: theme.transitions.duration.short }),
}));

const CustomComponentsStack = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "flexItem",
})<AppHeaderComponentOptions>(({ flexItem }) => ({
  flex: flexItem ? 1 : "none",
}));

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

interface Props extends AppHeaderComponents, AppHeaderOptions {
  isMobile?: boolean;
}

export default function AppHeader({
  isMobile,
  subheader,
  label,
  headerComponents: headerComponents,
  headerComponentOptions: headerComponentOptions,
  onBack,
}: Props): ReactElement {
  const theme = useTheme();
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

  function handleGetProps(trigger: boolean): ComponentProps<typeof AppBar> {
    return {
      elevation: trigger ? 2 : 0,
      sx: { background: trigger ? theme.palette.background.default : theme.customBackgrounds.common.transparent },
    };
  }

  return (
    <ElevationScroll getProps={handleGetProps}>
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
            <CustomComponentsStack flexItem={flexItem} spacing={2} direction="row" alignItems="center">
              {HeaderComponents}
            </CustomComponentsStack>
          </Container>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
