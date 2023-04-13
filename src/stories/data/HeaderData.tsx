import type { ReactElement } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, MenuList, MenuItem } from "@mui/material";
import IconMenuButton from "~/components/library/icon-menu-button/IconMenuButton";
import ResponsiveComponent from "~/components/library/responsive-component/ResponsiveComponent";
import Search from "~/components/library/search/Search";
import ThemeToggle from "~/components/library/theme-toggle/ThemeToggle";
import AppHeaderGroup from "~/components/navigation/app-header-group/AppHeaderGroup";

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
