import * as React from "react";
import Component from "./Logo";
import LogoFull from "./LogoFull";

export default {
  component: Component,
  title: "Library/Logo",
};

export const Small = {
  args: {
    size: "small",
  },
};

export const Medium = {
  args: {
    size: "medium",
  },
};

export const Large = {
  args: {
    size: "large",
  },
};

export const Full = {
  render: (args) => <LogoFull {...args} />,
  args: {
    size: "small",
  },
};
