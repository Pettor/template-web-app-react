import type { ReactElement } from "react";
import { PwaOfflineDialog } from "shared-ui";
import { PwaUpdateDialogModule } from "../pwa-update-dialog/PwaUpdateDialogModule";
import { usePwaProviderModule } from "./UsePwaProviderModule";

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
