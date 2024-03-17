import type { AppSessionContent } from "~/classes/app-session/AppSessionContent";

export const AppSessionData: AppSessionContent = {
  name: "John Doe",
  email: "john.doe@gmail.com",
  onAbout: () => console.log("onAbout"),
  onLogout: () => console.log("onLogout"),
};
