import type { ComponentProps, ReactElement } from "react";
import { PwaUpdateDialog } from "shared-ui";
import { useAppInfo } from "../../config/UseAppInfo";

interface Props extends Omit<ComponentProps<typeof PwaUpdateDialog>, "appName"> {}

export function PwaUpdateDialogExt(props: Props): ReactElement {
  const { appName } = useAppInfo();

  return <PwaUpdateDialog appName={appName} {...props} />;
}
