import type { ReactElement } from "react";
import { Box, Toolbar, useMediaQuery } from "@mui/material";
import type { Breakpoint, SxProps, Theme } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { AppHeaderProps } from "../../Navigation/AppHeader";
import { AppHeader } from "../../Navigation/AppHeader";
import { HeaderLayoutContainer } from "./HeaderLayoutContainer";
import { HeaderLayoutContent } from "./HeaderLayoutContent";

export interface HeaderLayoutProps extends AppHeaderProps {
  maxWidth?: Breakpoint | false;
  sx?: SxProps<Theme>;
  children?: ReactElement | ReactElement[];
}

export function HeaderLayout({ maxWidth = "lg", sx, children, ...headerProps }: HeaderLayoutProps): ReactElement {
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
