import type { ReactElement } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";
import type { MenuOptions } from "../app-menu/AppMenuClasses";

const MenuContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100dvw",
  height: "100dvh",
  background: theme.palette.background.paper,
  zIndex: theme.zIndex.drawer + 1,
}));

interface Props extends MenuOptions {}

export default function AppMenuMobile({ open, handleClose, children }: Props): ReactElement {
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
