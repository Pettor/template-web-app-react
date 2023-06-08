import type { ReactElement } from "react";
import type { StyledComponent } from "@emotion/styled";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";
import type { PaletteColor } from "@mui/material/styles";
import { useTheme, styled } from "@mui/material/styles";
import { DocumentationDecorator } from "storybook-base";
import { DocumentationLayout } from "storybook-base";
export default {
  title: "Design System/Colors",
  decorators: [DocumentationDecorator],
};

const Item: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
  ...theme.typography.subtitle2,
  padding: theme.spacing(2),
  alignItems: "center",
  height: "100%",
  display: "flex",
}));

function ColorRow(label: string, color: PaletteColor): ReactElement {
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
}

export function Colors(): ReactElement {
  const theme = useTheme();
  const { primary, secondary, info, success, warning, error } = theme.palette;

  return (
    <DocumentationLayout label="Colors">
      <Grid container>
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
      </Grid>
    </DocumentationLayout>
  );
}
