import type { ReactElement } from "react";
import { useAboutPage } from "./UseAboutPage";
import type { AboutDetailsProps } from "~/components/feedback/about-details/AboutDetails";
import { AboutView } from "~/components/views/about/AboutView";

export interface AboutPageProps extends Pick<AboutDetailsProps, "serverVersion"> {}

export function AboutPage({ serverVersion }: AboutPageProps): ReactElement {
  const aboutProps = useAboutPage(serverVersion);
  return <AboutView {...aboutProps} />;
}
