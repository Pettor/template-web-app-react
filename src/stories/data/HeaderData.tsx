import type { ReactElement } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, MenuList, MenuItem } from "@mui/material";
import AppHeaderGroup from "~/components/layout/app-header-group/AppHeaderGroup";
import IconMenuButton from "~/components/library/icon-button/IconMenuButton";
import ResponsiveComponent from "~/components/library/responsive/ResponsiveComponent";
import Search from "~/components/library/search/Search";
import ThemeToggle from "~/components/library/toggle/theme-toggle/ThemeToggle";

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
      ,
      <AppHeaderGroup key="group-1">
        <ThemeToggle key="theme-toggle" defaultMode="light" onToggle={handleToggle} />
      </AppHeaderGroup>
      <IconMenuButton key="avatar" icon={<Avatar sx={{ width: 32, height: 32 }} />}>
        <MenuList>
          <MenuItem>Content</MenuItem>{" "}
        </MenuList>
      </IconMenuButton>
    </>
  );
}
