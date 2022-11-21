import * as React from "react";
import Box from "@mui/material/Box";
import { default as MaterialContainer } from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ContainerLayout from "./ContainerLayout";

export default {
  component: ContainerLayout,
  title: "Layout/Templates",
} as ComponentMeta<typeof ContainerLayout>;

const Template: ComponentStory<typeof ContainerLayout> = (args) => {
  return <ContainerLayout {...args} />;
};

const GridItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Content() {
  return (
    <MaterialContainer maxWidth="xl">
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
    </MaterialContainer>
  );
}

export const Container = Template.bind({});
Container.args = {
  children: <Content />,
};
