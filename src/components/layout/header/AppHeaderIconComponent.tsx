import { ReactElement, ReactNode, useState } from "react";
import IconButton from "@mui/material/IconButton";
import AppMenu from "../menu/AppMenu";

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
    <>
      <IconButton onClick={handleClick}>{icon}</IconButton>
      {anchorEl && MenuNode && (
        <AppMenu anchorEl={anchorEl} open={!!anchorEl} handleClose={handleClose}>
          {MenuNode}
        </AppMenu>
      )}
    </>
  );
}
