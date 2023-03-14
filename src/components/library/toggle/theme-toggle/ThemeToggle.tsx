import { ReactElement } from "react";
import { PaletteMode } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import MoonSvg from "./svg/Moon.svg";
import SunSvg from "./svg/Sun.svg";

const StyledSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-switchBase": {
    "&:hover": {
      backgroundColor: theme.customBackgrounds.common.transparent,
    },
    "&.Mui-checked": {
      color: "#fff",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(${MoonSvg})`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.customBackgrounds.accent.main,
      },
      "&:hover": {
        backgroundColor: theme.customBackgrounds.common.transparent,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.background.default,
    width: 16,
    height: 16,
    margin: 2,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${SunSvg})`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.customBackgrounds.accent.main,
    borderRadius: 22 / 2,
  },
}));

interface Props extends SwitchProps {
  defaultMode: PaletteMode;
  onToggle(mode: PaletteMode): void;
}

export default function ThemeToggle({ defaultMode, onToggle, ...rest }: Props): ReactElement {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    onToggle(event.target.checked ? "dark" : "light");
  }

  return <StyledSwitch {...rest} checked={defaultMode === "dark"} onChange={handleChange} />;
}
