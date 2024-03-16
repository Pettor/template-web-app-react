import { faker } from "@faker-js/faker";
import type { AppSessionContent } from "~/classes/AppSessionContent";

export const AppSessionData: AppSessionContent = {
  name: faker.internet.userName(),
  email: faker.internet.email(),
  onAbout: () => console.log("onAbout"),
  onLogout: () => console.log("onLogout"),
};
