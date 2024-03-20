import type { ReactElement } from "react";
import type { AboutPageProps } from "../AboutPage";
import { useAboutModalPage } from "./UseAboutModalPage";
import { AboutModal } from "~/components/feedback/about-modal/AboutModal";

export interface AboutModalPageProps extends AboutPageProps {}

export function AboutModalPage({ serverVersion }: AboutModalPageProps): ReactElement {
  const aboutProps = useAboutModalPage(serverVersion);
  return <AboutModal {...aboutProps} />;
}
