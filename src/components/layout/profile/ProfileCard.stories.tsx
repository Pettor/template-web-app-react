import ProfileCard from "./ProfileCard";
import { CommonDecorator } from "../../../stories/decorators/CommonDecorator";

export default {
  component: ProfileCard,
  title: "Layout/Profile/Card",
  decorators: [CommonDecorator],
};

export const WithData = {
  args: {
    name: "John Doe",
    email: "john.doe@gmail.com"
  }
}

export const Loading = {
  args: {
    loading: true
  }
}
