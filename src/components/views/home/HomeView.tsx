import type { ComponentProps, ComponentType, ReactElement } from "react";
import BackendIcon from "@mui/icons-material/Dns";
import OptimizedIcon from "@mui/icons-material/ElectricBolt";
import LayersIcon from "@mui/icons-material/Layers";
import StorybookIcon from "@mui/icons-material/Palette";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";
import HomeViewColorBox from "./HomeViewColorBox";
import HomeViewContainer from "./HomeViewContainer";
import HomeViewGridContent from "./HomeViewGridContent";
import HomeViewGridItem from "./HomeViewGridItem";
import HomeViewTitle from "./HomeViewTitle";
import HeaderLayout from "~/components/layout/header/HeaderLayout";

interface Props extends Omit<ComponentProps<typeof HeaderLayout>, "children"> {}

export default function HomeView({ ...headerProps }: Props): ReactElement {
  const intl = useIntl();

  function renderGridItem(Icon: ComponentType, heading: string, description: string): ReactElement {
    return (
      <HomeViewGridItem>
        <Icon />
        <Typography variant="h6">{heading}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
      </HomeViewGridItem>
    );
  }

  return (
    <HeaderLayout headerOptions={{ label: "Home" }} {...headerProps}>
      <HomeViewColorBox />
      <HomeViewContainer>
        <HomeViewTitle>
          {intl.formatMessage({
            description: "HomeView - Welcome",
            defaultMessage: "Welcome",
            id: "vlRwrH",
          })}
        </HomeViewTitle>
        <Typography variant="h3" gutterBottom>
          {intl.formatMessage({
            description: "HomeView - Subheader",
            defaultMessage: "This is the home page",
            id: "MIobVx",
          })}
        </Typography>

        <HomeViewGridContent container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 8 }}>
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
        </HomeViewGridContent>
      </HomeViewContainer>
    </HeaderLayout>
  );
}
