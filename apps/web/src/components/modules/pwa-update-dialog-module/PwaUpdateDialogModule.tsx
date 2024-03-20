import type { ReactElement } from "react";
import { usePwaUpdateDialogModule } from "./UsePwaUpdateDialogModule";
import type { PwaUpdateDialogProps } from "~/components/feedback/pwa-update-dialog/PwaUpdateDialog";
import { PwaUpdateDialog } from "~/components/feedback/pwa-update-dialog/PwaUpdateDialog";

interface Props extends Omit<PwaUpdateDialogProps, "appName"> {}

export function PwaUpdateDialogModule(props: Props): ReactElement {
  const { applicationName } = usePwaUpdateDialogModule();

  return <PwaUpdateDialog appName={applicationName} {...props} />;
}
