import type { ReactElement } from "react";
import type { PwaUpdateDialogProps } from "shared-ui";
import { PwaUpdateDialog } from "shared-ui";
import { useAppInfo } from "../../config/UseAppInfo";

interface Props extends Omit<PwaUpdateDialogProps, "appName"> {}

export function PwaUpdateDialogExt(props: Props): ReactElement {
  const { appName } = useAppInfo();

  return <PwaUpdateDialog appName={appName} {...props} />;
}
