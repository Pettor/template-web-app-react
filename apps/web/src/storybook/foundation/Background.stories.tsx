import type { ReactElement } from "react";
import type { StyledComponent } from "@emotion/styled";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import { DocumentationDecorator } from "storybook-base";
import { DocumentationLayout } from "storybook-base";

export default {
  title: "Design System/Background",
  decorators: [DocumentationDecorator],
};

const Item: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
  ...theme.typography.subtitle2,
  padding: theme.spacing(2),
  alignItems: "center",
  height: "100%",
  display: "flex",
}));

function ColorRow(label: string, background: string): ReactElement {
  return (
    <>
      <Grid item xs={3}>
        <Item>
          <Typography variant="subtitle1">{label}</Typography>
        </Item>
      </Grid>
      <Grid item xs={9} sx={{ background }}>
        <Item>{background}</Item>
      </Grid>
    </>
  );
}

export function Background(): ReactElement {
  const theme = useTheme();
  const {
    background: { default: defaultBackground, paper: paperBackground },
  } = theme.palette;
  const {
    customBackgrounds: {
      accent: { light: accentLight, main: accentMain, dark: accentDark },
      common: { transparent },
      gradients: {
        linear: { variation1 },
      },
    },
  } = theme;

  return (
    <DocumentationLayout label="Background">
      <Grid container>
        <Grid item xs={3}>
          <Item>
            <Typography variant="h6">MUI</Typography>
          </Item>
        </Grid>
        <Grid item xs={9}>
          <Item>
            <Typography variant="h6" />
          </Item>
        </Grid>
        {ColorRow("Default", defaultBackground)}
        {ColorRow("Paper", paperBackground)}

        <Grid item xs={3}>
          <Item>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Accent
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={9} />
        {ColorRow("Main", accentMain)}
        {ColorRow("Light", accentLight)}
        {ColorRow("Dark", accentDark)}

        <Grid item xs={3}>
          <Item>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Common
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={9} />
        {ColorRow("Transparent", transparent)}

        <Grid item xs={3}>
          <Item>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Gradients
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={9} />
        {ColorRow("Variation 1", variation1)}
      </Grid>
    </DocumentationLayout>
  );
}
