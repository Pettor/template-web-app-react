import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import AppMenu from "../menu/AppMenu";
import AppMenuContent from "../menu/content/AppMenuContent";
import HeaderLayout from "./HeaderLayout";

export default {
  component: HeaderLayout,
  title: "Layout/Templates",
} as ComponentMeta<typeof HeaderLayout>;

const Template: ComponentStory<typeof HeaderLayout> = (args) => {
  return <HeaderLayout {...args} />;
};

const GridItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Content = () => (
  <Container maxWidth="xl">
    <Box>
      This is content
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <GridItem>xs=2</GridItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export const Header = Template.bind({});
Header.args = {
  label: "This is a Header",
  children: <Content />,
};

export const HeaderWithMenu = Template.bind({});
HeaderWithMenu.args = {
  label: "With Menu",
  injectedMenu: {
    menu: AppMenu,
    menuContent: <AppMenuContent />,
  },
  children: <Content />,
};
