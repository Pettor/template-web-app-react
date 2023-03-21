import React from "react";
import { ComponentStoryObj } from "@storybook/react";
import Component from "./ContainerLayout";
import { ContentComponent } from "~/stories/data/ContentData";

type Story = ComponentStoryObj<typeof Component>;

export default {
  component: Component,
  title: "Layout/Templates",
};

export const ContainerLayout: Story = {
  args: {
    children: <ContentComponent />,
  },
};
