import CommonDecorator from "../../../stories/decorators/CommonDecorator";
import MaxWidthDecorator from "../../../stories/decorators/MaxWidthDecorator";
import Component from "./Search";

export default {
  component: Component,
  title: "Library/Search",
  decorators: [MaxWidthDecorator, CommonDecorator],
};

export const Search = {};
