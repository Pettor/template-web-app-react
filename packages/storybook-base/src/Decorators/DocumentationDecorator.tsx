import type { ReactElement } from "react";
import type { StyledComponent } from "@emotion/styled";
import { Box } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import type { StoryFn } from "@storybook/react";

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

const ContainerBox: StyledComponent<BoxProps> = styled(Box)(() => ({
  position: "relative",
  height: "100dvh",
  width: "100%",
  overflow: "auto",
}));

const StyledBox: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
  position: "relative",
  margin: theme.spacing(4),
  zIndex: 1,
}));

export function DocumentationDecorator(Story: StoryFn): ReactElement {
  return (
    <>
      <LeftColorBox />
      <RightColorBox />
      <ContainerBox>
        <StyledBox>
          <Story />
        </StyledBox>
      </ContainerBox>
    </>
  );
}
