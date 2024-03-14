import type { ReactElement } from "react";
import { useDocumentTitle } from "usehooks-ts";
import { useHomePage } from "./UseHomePage";
import { HomeView } from "~/components/views/home/HomeView";

export interface HomePageProps {
  githubLink: string;
  linkedInLink: string;
}

export function HomePage({ githubLink, linkedInLink }: HomePageProps): ReactElement {
  useDocumentTitle("Home");
  const homeProps = useHomePage(githubLink, linkedInLink);

  return <HomeView {...homeProps} />;
}
