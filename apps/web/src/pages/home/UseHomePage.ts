export function useHomePage(repoUrl: string): {
  handleGithubClick: () => void;
} {
  function handleGithubClick(): void {
    window.open(repoUrl, "_blank", "noreferrer");
  }

  return {
    handleGithubClick,
  };
}
