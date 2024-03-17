import { faker } from "@faker-js/faker";
import type { AppSessionContent } from "~/classes/app-session/AppSessionContent";

export const AppSessionData: AppSessionContent = {
  name: faker.internet.userName(),
  email: faker.internet.email(),
  onAbout: () => console.log("onAbout"),
  onLogout: () => console.log("onLogout"),
};
