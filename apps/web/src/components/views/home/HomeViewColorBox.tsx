import type { ReactElement } from "react";
import type { StyledComponent } from "@emotion/styled";
import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const LeftColorBox: StyledComponent<BoxProps> = styled(Box)(() => ({
  content: "''",
  position: "fixed",
  top: "-200px",
  left: "-200px",
  width: "400px",
  height: "400px",
  background: "#c989e8",
  opacity: 0.5,
  filter: "blur(150px)",
}));

const RightColorBox: StyledComponent<BoxProps> = styled(Box)(() => ({
  content: "''",
  position: "fixed",
  top: "-200px",
  right: "-200px",
  width: "400px",
  height: "400px",
  background: "#b3d4ff",
  opacity: 0.5,
  filter: "blur(150px)",
}));

export function HomeViewColorBox(): ReactElement {
  return (
    <>
      <LeftColorBox />
      <RightColorBox />
    </>
  );
}
