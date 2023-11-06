import type { ReactElement } from "react";
import { BasicLayout } from "shared-ui";

export interface AboutViewProps {
  version: string;
}

export function AboutView({ version }: AboutViewProps): ReactElement {
  return (
    <BasicLayout>
      <h1>About</h1>
      <p>Version: {version}</p>
    </BasicLayout>
  );
}
