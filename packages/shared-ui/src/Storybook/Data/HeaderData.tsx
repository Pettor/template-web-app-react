import { useState } from "react";
import type { ReactElement } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, MenuList, MenuItem, Box } from "@mui/material";
import { ResponsiveComponent, IconMenuButton, ThemeToggle, Search } from "../../Library";
import { AppHeaderGroup } from "../../Navigation";

export function DefaultHeaderComponents(): ReactElement {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  function handleToggle(): void {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <>
      <ResponsiveComponent
        key="search"
        desktop={<Search maxWidth="200px" />}
        mobile={<IconMenuButton key="search" icon={<SearchIcon />} />}
      />
      <AppHeaderGroup key="group-1">
        <Box
          sx={{ display: "flex", color: "black", alignItems: "center" }}
          data-testid="app-header-group__theme-toggle-box"
        >
          {themeMode}
        </Box>
        <ThemeToggle key="theme-toggle" defaultMode={themeMode} onToggle={handleToggle} />
      </AppHeaderGroup>
      <IconMenuButton key="avatar" icon={<Avatar sx={{ width: 24, height: 24 }} />}>
        <MenuList>
          <MenuItem>Content</MenuItem>{" "}
        </MenuList>
      </IconMenuButton>
    </>
  );
}
