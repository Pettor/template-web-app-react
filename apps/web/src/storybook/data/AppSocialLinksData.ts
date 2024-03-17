import type { IAppSocialLinks } from "~/classes/app-social-links/IAppSocialLinks";

export const AppSocialLinksData: IAppSocialLinks = {
  onGithubClick: () => console.log("onGithubClick"),
  onLinkedInClick: () => console.log("onLinkedInClick"),
};
