import type { ComponentProps, ReactElement } from "react";
import PwaUpdateDialog from "../../../components/pwa/PwaUpdateDialog";
import useAppInfo from "../../config/UseAppInfo";

interface Props extends Omit<ComponentProps<typeof PwaUpdateDialog>, "appName"> {}

export default function PwaUpdateDialogExt(props: Props): ReactElement {
  const { appName } = useAppInfo();

  return <PwaUpdateDialog appName={appName} {...props} />;
}
