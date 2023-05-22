import type { ReactElement } from "react";
import type { SwitchProps, PaletteMode } from "@mui/material";
import { ThemeToggleSwitch } from "./ThemeToggleSwitch";

interface Props extends SwitchProps {
  defaultMode: PaletteMode;
  onToggle(mode: PaletteMode): void;
}

export function ThemeToggle({ defaultMode, onToggle, ...rest }: Props): ReactElement {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onToggle(event.target.checked ? "dark" : "light");
  }

  return <ThemeToggleSwitch {...rest} checked={defaultMode === "dark"} onChange={handleChange} />;
}
