import type { ComponentProps, ReactElement } from "react";
import { Box, Toolbar, useMediaQuery } from "@mui/material";
import type { Breakpoint, SxProps, Theme } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AppHeader } from "../../Navigation/AppHeader";
import { HeaderLayoutContainer } from "./HeaderLayoutContainer";
import { HeaderLayoutContent } from "./HeaderLayoutContent";

export interface HeaderLayoutProps {
  maxWidth?: Breakpoint | false;
  sx?: SxProps<Theme>;
  children?: ReactElement | ReactElement[];
}

interface Props extends HeaderLayoutProps, ComponentProps<typeof AppHeader> {}

export function HeaderLayout({ maxWidth = "lg", sx, children, ...headerProps }: Props): ReactElement {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <HeaderLayoutContainer sx={{ ...sx }}>
      <AppHeader {...headerProps} />
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <HeaderLayoutContent maxWidth={maxWidth}>
          <Toolbar />
          <Box component="main" sx={{ mt: 2, px: isLgUp ? 10 : 0 }}>
            {children}
          </Box>
        </HeaderLayoutContent>
      </Box>
    </HeaderLayoutContainer>
  );
}
