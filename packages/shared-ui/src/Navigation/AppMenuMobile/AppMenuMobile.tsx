import type { ReactElement } from "react";
import type { StyledComponent } from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import { Box, CardHeader, IconButton, Slide } from "@mui/material";
import type { BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { IMenuOptions } from "../../Navigation/AppMenu";

const MenuContainer: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100dvw",
  height: "100dvh",
  background: theme.palette.background.paper,
  zIndex: theme.zIndex.drawer + 1,
}));

export interface AppMenuMobileProps extends IMenuOptions {}

export function AppMenuMobile({ open, handleClose, children }: AppMenuMobileProps): ReactElement {
  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <MenuContainer>
        <CardHeader
          action={
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
          sx={{ p: 2, pb: 0 }}
        />
        {children}
      </MenuContainer>
    </Slide>
  );
}
