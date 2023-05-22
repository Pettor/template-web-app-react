import type { ReactElement } from "react";
import { PwaOfflineDialog } from "shared-ui";
import { useRegisterSW } from "virtual:pwa-register/react";
import { PwaUpdateDialogExt } from "../ext/pwa-update-dialog/PwaUpdateDialogExt";

interface Props {
  children: ReactElement;
}

const PWA_VERSION_INTERVAL = 60 * 60 * 1000;
const PWA_OFFLINE_AUTO_HIDE = 6 * 1000;

export function PwaProvider({ children }: Props): ReactElement {
  function checkPwaUpdate(registration: ServiceWorkerRegistration): void {
    setInterval(() => {
      // Check for PWA updates
      registration.update();
    }, PWA_VERSION_INTERVAL);
  }

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(registration) {
      if (!registration) {
        return;
      }
      checkPwaUpdate(registration);
    },
    onRegisterError(error) {
      console.log(`SW registration failed: ${error}`);
    },
  });

  async function handleRefresh(): Promise<void> {
    await updateServiceWorker(true);
  }

  function handleOfflineClose(): void {
    setOfflineReady(false);
  }

  return (
    <>
      <PwaUpdateDialogExt open={needRefresh} onUpdate={handleRefresh} />
      <PwaOfflineDialog open={offlineReady} autoHideDuration={PWA_OFFLINE_AUTO_HIDE} onClose={handleOfflineClose} />
      {children}
    </>
  );
}
