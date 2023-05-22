import type { ReactElement } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, MenuList, MenuItem } from "@mui/material";
import { ResponsiveComponent, IconMenuButton, ThemeToggle, Search } from "../../Library";
import { AppHeaderGroup } from "../../Navigation";

export function DefaultHeaderComponents(): ReactElement {
  function handleToggle(): void {
    console.log("onToggle");
  }

  return (
    <>
      <ResponsiveComponent
        key="search"
        desktop={<Search maxWidth="200px" />}
        mobile={<IconMenuButton key="search" icon={<SearchIcon />} />}
      />
      <AppHeaderGroup key="group-1">
        <ThemeToggle key="theme-toggle" defaultMode="light" onToggle={handleToggle} />
      </AppHeaderGroup>
      <IconMenuButton key="avatar" icon={<Avatar sx={{ width: 24, height: 24 }} />}>
        <MenuList>
          <MenuItem>Content</MenuItem>{" "}
        </MenuList>
      </IconMenuButton>
    </>
  );
}
