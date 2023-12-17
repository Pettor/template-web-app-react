import type { ReactElement } from "react";
import type { PwaUpdateDialogProps } from "shared-ui";
import { PwaUpdateDialog } from "shared-ui";
import { usePwaUpdateDialogModule } from "./UsePwaUpdateDialogModule";

interface Props extends Omit<PwaUpdateDialogProps, "appName"> {}

export function PwaUpdateDialogModule(props: Props): ReactElement {
  const { applicationName } = usePwaUpdateDialogModule();

  return <PwaUpdateDialog appName={applicationName} {...props} />;
}
