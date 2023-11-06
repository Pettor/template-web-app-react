import type { ReactElement } from "react";
import { BasicLayout } from "shared-ui";

export interface AboutViewProps {
  version: string;
}

export function AboutView({ version }: AboutViewProps): ReactElement {
  return (
    <BasicLayout>
      <h1>About View</h1>
      <h3>{version}</h3>
    </BasicLayout>
  );
}
