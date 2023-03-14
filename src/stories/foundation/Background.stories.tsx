import { ReactElement } from "react";
import { PaletteMode } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import CreateAppTheme from "../../libs/theme/Theme";
import DocumentationDecorator from "../decorators/DocumentationDecorator";
import { DocumentationLayout } from "../layout/DocumentationLayout";

export default {
  title: "Design System/Background",
  decorators: [DocumentationDecorator],
};

const Item = styled(Box)(({ theme }) => ({
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

export const Background = {
  render: (_: unknown, { globals: { theme: selectedTheme } }: { globals: { theme: PaletteMode } }) => {
    const theme = CreateAppTheme(selectedTheme);
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
  },
};
