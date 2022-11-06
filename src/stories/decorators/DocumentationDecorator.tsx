/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const BackgroundBox = styled(Box)(() => ({
  position: "fixed",
  "&::before": {
    content: "''",
    position: "absolute",
    top: "-200px",
    left: "-200px",
    width: "400px",
    height: "400px",
    background: "#c989e8",
    opacity: 0.5,
    filter: "blur(150px)",
  },
  "&::after": {
    content: "''",
    position: "absolute",
    top: "-200px",
    right: "-200px",
    width: "400px",
    height: "400px",
    background: "#b3d4ff",
    opacity: 0.5,
    filter: "blur(150px)",
  },
}));

const ContainerBox = styled(Box)(({ theme }) => ({
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

export const DocumentationDecorator = (story: any) => (
  <BackgroundBox>
    <ContainerBox>
      <StyledBox>{story()}</StyledBox>
    </ContainerBox>
  </BackgroundBox>
);
