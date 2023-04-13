import type { ReactElement, ReactNode } from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AppMenuResponsive from "~/components/navigation/app-menu-responsive/AppMenuResponsive";

interface Props {
  icon: ReactNode;
  children?: ReactElement | ReactElement[];
}

export default function IconMenuButton({ icon, children }: Props): ReactElement {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  function handleClick(event: React.MouseEvent<HTMLElement>): void {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(): void {
    setAnchorEl(null);
  }

  return (
    <Box>
      <IconButton onClick={handleClick}>{icon}</IconButton>
      {anchorEl && (
        <AppMenuResponsive anchorEl={anchorEl} open={!!anchorEl} handleClose={handleClose}>
          {children}
        </AppMenuResponsive>
      )}
    </Box>
  );
}
