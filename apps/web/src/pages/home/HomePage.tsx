import type { ReactElement } from "react";
import { useDocumentTitle } from "usehooks-ts";
import { useHomePage } from "./UseHomePage";
import { HomeView } from "~/components/views/home/HomeView";

export interface HomePageProps {
  repoUrl: string;
}

export function HomePage({ repoUrl }: HomePageProps): ReactElement {
  useDocumentTitle("Home");
  const { handleGithubClick } = useHomePage(repoUrl);

  return <HomeView components={<button onClick={handleGithubClick}>Component</button>} />;
}
