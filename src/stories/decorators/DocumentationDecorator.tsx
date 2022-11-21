/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const LeftColorBox = styled(Box)(() => ({
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

const RightColorBox = styled(Box)(() => ({
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

const ContainerBox = styled(Box)(() => ({
  position: "relative",
  height: "100vh",
  width: "100%",
  overflow: "auto",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  position: "relative",
  margin: theme.spacing(4),
  zIndex: 1,
}));

export function DocumentationDecorator(story: any) {
  return (
    <>
      <LeftColorBox />
      <RightColorBox />
      <ContainerBox>
        <StyledBox>{story()}</StyledBox>
      </ContainerBox>
    </>
  );
}
