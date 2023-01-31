import Component from "./AppHeader";

export default {
  component: Component,
  title: "Layout/Header",
};

export const AppHeader = {
  args: {
    label: "This is a Header",
  },
};

export const SubHeader = {
  args: {
    subheader: true,
    label: "This is a SubHeader",
  },
};
