import type { ReactElement } from "react";
import { AboutView } from "~/components/views/about/AboutView";

export interface AboutPageProps {
  version: string;
}

export function AboutPage({ version }: AboutPageProps): ReactElement {
  return <AboutView version={version} />;
}
