import type { StyledComponent } from "@emotion/styled";
import { Switch } from "@mui/material";
import type { SwitchProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import MoonSvg from "./svg/Moon.svg";
import SunSvg from "./svg/Sun.svg";

export const ThemeToggleSwitch: StyledComponent<SwitchProps> = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-switchBase": {
    "&:hover": {
      backgroundColor: theme.customBackgrounds.common.transparent,
    },
    "&.Mui-checked": {
      color: "#fff",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('${MoonSvg}')`,
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
      backgroundImage: `url('${SunSvg}')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.customBackgrounds.accent.main,
    borderRadius: 22 / 2,
  },
}));
