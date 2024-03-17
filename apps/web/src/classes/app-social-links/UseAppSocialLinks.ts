import type { AppSocialLinks } from "./AppSocialLinks";

export function useAppSocialLinks(githubLink: string, linkedInLink: string): AppSocialLinks {
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
