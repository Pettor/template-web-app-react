import CommonDecorator from "../../../../stories/decorators/CommonDecorator";
import Component from "./ThemeToggle";

export default {
  component: Component,
  title: "Library/Toggle/Theme",
  decorators: [CommonDecorator],
};

export const Light = {
  args: {
    defaultMode: "light",
  },
};

export const Dark = {
  args: {
    defaultMode: "dark",
  },
};
