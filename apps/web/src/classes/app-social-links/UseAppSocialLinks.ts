import type { IAppSocialLinks } from "./IAppSocialLinks";

export function useAppSocialLinks(githubLink: string, linkedInLink: string): IAppSocialLinks {
  function handleOnGithubClick(): void {
    window.open(githubLink, "_blank", "noreferrer");
  }

  function handleOnLinkedInClick(): void {
    window.open(linkedInLink, "_blank", "noreferrer");
  }

  return {
    onGithubClick: handleOnGithubClick,
    onLinkedInClick: handleOnLinkedInClick,
  };
}
