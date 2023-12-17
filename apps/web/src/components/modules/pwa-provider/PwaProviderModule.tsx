import type { ReactElement } from "react";
import { PwaOfflineDialog } from "shared-ui";
import { PwaUpdateDialogModule } from "../pwa-update-dialog/PwaUpdateDialogModule";
import { PWA_OFFLINE_AUTO_HIDE } from "./PwaProviderModuleConstants";
import { usePwaProviderModule } from "./UsePwaProviderModule";

interface Props {
  children: ReactElement;
}

export function PwaProviderModule({ children }: Props): ReactElement {
  const { needRefresh, offlineReady, handleOfflineClose, handleRefresh } = usePwaProviderModule();

  return (
    <>
      <PwaUpdateDialogModule open={needRefresh} onUpdate={handleRefresh} />
      <PwaOfflineDialog open={offlineReady} autoHideDuration={PWA_OFFLINE_AUTO_HIDE} onClose={handleOfflineClose} />
      {children}
    </>
  );
}
