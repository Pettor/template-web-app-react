import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { PaletteColor, styled } from "@mui/material/styles";
import Box from "@mui/system/Box";
import { Meta } from "@storybook/react";
import CreateAppTheme from "../../theme/Theme";
import { DocumentationDecorator } from "../decorators/DocumentationDecorator";

const theme = CreateAppTheme();

export default {
  title: "Design System/Colors",
  decorators: [DocumentationDecorator],
} as Meta;

const { primary, secondary, info, success, warning, error } = theme.palette;

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.subtitle2,
  padding: theme.spacing(2),
  alignItems: "center",
  height: "100%",
  display: "flex",
}));

const StyledGrid = styled(Grid)(() => ({
  border: "1px solid",
  borderRadius: 10,
  background: "white",
  padding: theme.spacing(2),
}));

const ColorRow = (label: string, color: PaletteColor) => {
  const { contrastText, dark, light, main } = color;
  return (
    <>
      <Grid item xs={3}>
        <Item>
          <Typography variant="subtitle1">{label}</Typography>
        </Item>
      </Grid>
      <Grid item xs={3} sx={{ color: contrastText, background: main }}>
        <Item>{main}</Item>
      </Grid>
      <Grid item xs={3} sx={{ color: contrastText, background: light }}>
        <Item>{light}</Item>
      </Grid>
      <Grid item xs={3} sx={{ color: contrastText, background: dark }}>
        <Item>{dark}</Item>
      </Grid>
    </>
  );
};

export const Colors = () => (
  <Box>
    <Typography variant="h1">Colors</Typography>
    <br />
    <StyledGrid container>
      <Grid item xs={3}>
        <Item>
          <Typography variant="h6">Name</Typography>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <Typography variant="h6">Main</Typography>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <Typography variant="h6">Light</Typography>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
          <Typography variant="h6">Dark</Typography>
        </Item>
      </Grid>
      {ColorRow("Primary", primary)}
      {ColorRow("Secondary", secondary)}
      {ColorRow("Info", info)}
      {ColorRow("Success", success)}
      {ColorRow("Warning", warning)}
      {ColorRow("Error", error)}
    </StyledGrid>
  </Box>
);
