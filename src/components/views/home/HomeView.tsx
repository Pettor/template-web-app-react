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
import HeaderLayout, { HeaderLayoutComponents } from "../../layout/templates/HeaderLayout";

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

const ContainerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  position: "relative",
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
  background: `${theme.palette.background.paper}ba`,
  borderRadius: "12px",
}));

const GradientTypography = styled("span")(({ theme }) => ({
  ...theme.typography.h1,
  background: theme.customBackgrounds.gradients.linear.variation1,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
}));

interface Props extends HeaderLayoutComponents {}

function HomeView({ ...rest }: Props) {
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
    <HeaderLayout headerOptions={{ label: "Home" }} {...rest}>
      <LeftColorBox />
      <RightColorBox />
      <ContainerBox>
        <GradientTypography>
          {intl.formatMessage({
            description: "HomeView - Welcome",
            defaultMessage: "Welcome",
            id: "vlRwrH",
          })}
        </GradientTypography>
        <Typography variant="h3" gutterBottom>
          {intl.formatMessage({
            description: "HomeView - Subheader",
            defaultMessage: "This is the home page",
            id: "MIobVx",
          })}
        </Typography>

        <GridContent container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 8 }}>
          <Grid item xs={4} sm={4} md={4} key={0}>
            {renderGridItem(
              LayersIcon,
              intl.formatMessage({
                description: "HomeViewGrid - FullStack Heading",
                defaultMessage: "Full Stack",
                id: "Ns+2OJ",
              }),
              intl.formatMessage({
                description: "HomeViewGrid - FullStack Description",
                defaultMessage: "Web template with backend, E2E and UX / UI development tools",
                id: "OLZaJ+",
              })
            )}
          </Grid>
          <Grid item xs={4} sm={4} md={4} key={1}>
            {renderGridItem(
              StorybookIcon,
              intl.formatMessage({
                description: "HomeViewGrid - Storybook Heading",
                defaultMessage: "Storybook",
                id: "TBPCn7",
              }),
              intl.formatMessage({
                description: "HomeViewGrid - Storybook Description",
                defaultMessage: "Template use Storybook for UI development",
                id: "hoSCLa",
              })
            )}
          </Grid>
          <Grid item xs={4} sm={4} md={4} key={2}>
            {renderGridItem(
              BackendIcon,
              intl.formatMessage({
                description: "HomeViewGrid - .NET Heading",
                defaultMessage: ".NET Backend",
                id: "pJHoJN",
              }),
              intl.formatMessage({
                description: "HomeViewGrid - .NET Description",
                defaultMessage: "Repo with .NET 7 template for backend development",
                id: "73ixSS",
              })
            )}
          </Grid>
          <Grid item xs={4} sm={4} md={4} key={3}>
            {renderGridItem(
              OptimizedIcon,
              intl.formatMessage({
                description: "HomeViewGrid - Optimized Heading",
                defaultMessage: "Highly Optimized",
                id: "MoQIaW",
              }),
              intl.formatMessage({
                description: "HomeViewGrid - Optimized Description",
                defaultMessage: "Template is highly optimized for performance",
                id: "Dv81pe",
              })
            )}
          </Grid>
        </GridContent>
      </ContainerBox>
    </HeaderLayout>
  );
}

export default HomeView;
