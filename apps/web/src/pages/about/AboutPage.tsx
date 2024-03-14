import type { ReactElement } from "react";
import { useAboutPage } from "./UseAboutPage";
import { AboutView } from "~/components/views/about/AboutView";

export interface AboutPageProps {
  version: string;
}

export function AboutPage({ version }: AboutPageProps): ReactElement {
  const aboutProps = useAboutPage(version);
  return <AboutView {...aboutProps} />;
}
