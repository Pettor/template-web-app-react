import type { ReactElement } from "react";
import { useAboutPage } from "./UseAboutPage";
import type { AboutProps } from "~/components/feedback/about/About";
import { AboutView } from "~/components/views/about/AboutView";

export interface AboutPageProps extends Pick<AboutProps, "serverVersion"> {}

export function AboutPage({ serverVersion }: AboutPageProps): ReactElement {
  const aboutProps = useAboutPage(serverVersion);
  return <AboutView {...aboutProps} />;
}
