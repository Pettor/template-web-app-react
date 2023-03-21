import type { ReactElement } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const GridItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

export function ContentComponent(): ReactElement {
  return (
    <Container maxWidth="xl">
      <LeftColorBox />
      <RightColorBox />
      <Box>
        This is content
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(200)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <GridItem>xs=2</GridItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
