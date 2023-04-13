import type { ComponentProps, ReactElement } from "react";
import useAppInfo from "../../config/UseAppInfo";
import PwaUpdateDialog from "~/components/navigation/pwa-update-dialog/PwaUpdateDialog";

interface Props extends Omit<ComponentProps<typeof PwaUpdateDialog>, "appName"> {}

export default function PwaUpdateDialogExt(props: Props): ReactElement {
  const { appName } = useAppInfo();

  return <PwaUpdateDialog appName={appName} {...props} />;
}
