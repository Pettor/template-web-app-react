import type { ReactElement } from "react";
import type { AboutViewProps } from "../../components/views/about/AboutView";
import { useAboutPage } from "./UseAboutPage";
import { AboutView } from "~/components/views/about/AboutView";

export interface AboutPageProps extends Pick<AboutViewProps, "serverVersion"> {}

export function AboutPage({ serverVersion }: AboutPageProps): ReactElement {
  const aboutProps = useAboutPage(serverVersion);
  return <AboutView {...aboutProps} />;
}
