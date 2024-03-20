import type { ReactElement } from "react";
import { PwaUpdateDialogModule } from "../pwa-update-dialog-module/PwaUpdateDialogModule";
import { usePwaProviderModule } from "./UsePwaProviderModule";
import { PwaOfflineDialog } from "~/components/feedback/pwa-offline-dialog/PwaOfflineDialog";

interface Props {
  children: ReactElement;
}

export function PwaProviderModule({ children }: Props): ReactElement {
  const { needRefresh, offlineReady, handleOfflineClose, handleRefresh } = usePwaProviderModule();

  return (
    <>
      <PwaUpdateDialogModule open={needRefresh} onUpdate={handleRefresh} />
      <PwaOfflineDialog open={offlineReady} onClose={handleOfflineClose} />
      {children}
    </>
  );
}
