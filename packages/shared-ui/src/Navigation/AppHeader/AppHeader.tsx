import type { ComponentProps, ReactElement } from "react";
import BackArrow from "@mui/icons-material/ArrowBack";
import { Typography, Container, IconButton, Divider, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Logo } from "../../Library/Logo";
import { ElevationScroll } from "../../Navigation/ElevationScroll";
import { AppHeaderBar } from "./AppHeaderBar";
import type { AppHeaderComponents, AppHeaderOptions } from "./AppHeaderClasses";
import { AppHeaderComponentsContainer } from "./AppHeaderComponentsContainer";

export interface AppHeaderProps extends AppHeaderComponents, AppHeaderOptions {
  isMobile?: boolean;
}

export function AppHeader({
  isMobile,
  subheader,
  label,
  headerComponents,
  headerComponentOptions,
  onBack,
}: AppHeaderProps): ReactElement {
  const theme = useTheme();
  const { flexItem, fill } = headerComponentOptions || { flexItem: false, fill: false };

  function handleGetProps(trigger: boolean): ComponentProps<typeof AppHeaderBar> {
    return {
      elevation: trigger ? 2 : 0,
      sx: { background: trigger ? theme.palette.background.default : theme.customBackgrounds.common.transparent },
    };
  }

  return (
    <ElevationScroll getProps={handleGetProps}>
      <AppHeaderBar position="fixed" elevation={1}>
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
            <AppHeaderComponentsContainer flexItem={flexItem} spacing={2} direction="row" alignItems="center">
              {headerComponents}
            </AppHeaderComponentsContainer>
          </Container>
        </Toolbar>
      </AppHeaderBar>
    </ElevationScroll>
  );
}
