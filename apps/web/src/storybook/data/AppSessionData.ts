import type { IAppSessionContent } from "~/classes/app-session/IAppSessionContent";

export const AppSessionData: IAppSessionContent = {
  name: "John Doe",
  email: "john.doe@gmail.com",
  onAbout: () => console.log("onAbout"),
  onLogout: () => console.log("onLogout"),
};
