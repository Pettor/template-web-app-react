import { PaletteMode } from "@mui/material";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import MoonSvg from "./svg/Moon.svg";
import SunSvg from "./svg/Sun.svg";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(${SunSvg})`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${MoonSvg})`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

interface Props extends SwitchProps {
  defaultMode: PaletteMode;
  onToggle(mode: PaletteMode): void;
}

export default function ThemeToggle({ defaultMode, onToggle, ...rest }: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onToggle(event.target.checked ? "dark" : "light");
  }

  return <MaterialUISwitch {...rest} checked={defaultMode === "dark"} onChange={handleChange} />;
}