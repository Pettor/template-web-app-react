import { ComponentType } from "react";
import { useIntl } from "react-intl";
import BackendIcon from "@mui/icons-material/Dns";
import OptimizedIcon from "@mui/icons-material/ElectricBolt";
import LayersIcon from "@mui/icons-material/Layers";
import StorybookIcon from "@mui/icons-material/Palette";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import HeaderLayout, { IHeaderLayout } from "../../layout/templates/HeaderLayout";

const BoxContainer = styled(Box)(() => ({
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

const GridContent = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const GridItem = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  height: "100%",
  padding: theme.spacing(4),
  textAlign: "left",
  color: theme.palette.text.secondary,
  background: theme.palette.background.paper,
  borderRadius: "12px",
}));

type Props = IHeaderLayout;

const HomeView = (headerLayoutProps: Props) => {
  const intl = useIntl();

  function renderGridItem(Icon: ComponentType, heading: string, description: string) {
    return (
      <GridItem>
        <Icon />
        <Typography variant="h6">{heading}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
      </GridItem>
    );
  }

  return (
    <HeaderLayout headerOptions={{ label: "Home" }} {...headerLayoutProps}>
      <BoxContainer />
      <ContainerBox>
        <Typography variant="h1" gutterBottom>
          {intl.formatMessage({
            description: "HomeView - Welcome",
            defaultMessage: "Welcome",
            id: "vlRwrH",
          })}
        </Typography>
        <Typography variant="h3" gutterBottom>
          {intl.formatMessage({
            description: "HomeView - Subheader",
            defaultMessage: "This is the home page",
            id: "MIobVx",
          })}
        </Typography>

        <GridContent container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 8 }}>
          <Grid item xs={4} sm={4} md={4} key={0}>
            {renderGridItem(LayersIcon, "Full Stack", "Web template with backend, E2E and UX / UI development tools")}
          </Grid>
          <Grid item xs={4} sm={4} md={4} key={1}>
            {renderGridItem(StorybookIcon, "Storybook", "Template use Storybook for UI development")}
          </Grid>
          <Grid item xs={4} sm={4} md={4} key={2}>
            {renderGridItem(BackendIcon, ".NET Backend", "Repo with .NET 7 template for backend development")}
          </Grid>
          <Grid item xs={4} sm={4} md={4} key={3}>
            {renderGridItem(OptimizedIcon, "Highly Optimized", "Template is highly optimized for performance")}
          </Grid>
        </GridContent>
      </ContainerBox>
    </HeaderLayout>
  );
};

export default HomeView;
