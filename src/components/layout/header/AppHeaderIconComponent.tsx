import type { ReactElement, ReactNode } from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AppMenuResponsive from "../menu/AppMenuResponsive";

interface Props {
  icon: ReactNode;
  MenuNode?: ReactElement | ReactElement[];
}

export default function AppHeaderIconComponent({ icon, MenuNode }: Props): ReactElement {
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
      {anchorEl && MenuNode && (
        <AppMenuResponsive anchorEl={anchorEl} open={!!anchorEl} handleClose={handleClose}>
          {MenuNode}
        </AppMenuResponsive>
      )}
    </Box>
  );
}
