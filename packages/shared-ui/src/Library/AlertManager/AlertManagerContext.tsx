import type { ReactElement } from "react";
import { createContext, useCallback, useMemo, useState } from "react";
import { produce } from "immer";
import { Alert } from "Library/Alert/Alert";
import type { AlertOptions } from "Library/Alert/AlertClasses";
import { getCrypto } from "react-utils";
import type { AlertManagerAlert } from "./AlertMangerClasses";

interface IAlertManagerContext {
  addAlert: (alertOptions: AlertOptions) => void;
  alerts: AlertManagerAlert[];
}

const AlertManagerContext = createContext<IAlertManagerContext | null>(null);

interface Props {
  children: ReactElement;
}

function AlertManagerProvider({ children }: Props): ReactElement {
  const [alerts, setAlerts] = useState<AlertManagerAlert[]>([]);

  const handleClosed = useCallback((id: string) => {
    setAlerts((prevAlerts) =>
      produce(prevAlerts, (draft) => {
        const index = draft.findIndex((alert) => alert.id === id);
        if (index !== -1) {
          draft.splice(index, 1);
        }
        return draft;
      })
    );
  }, []);

  const addAlert = useCallback(
    (alertOptions: AlertOptions) => {
      const id = getCrypto().randomUUID();

      setAlerts((prevAlerts) =>
        produce(prevAlerts, (draft) => {
          draft.unshift({
            id,
            element: <Alert key={id} {...alertOptions} onClosed={(): void => handleClosed(id)} />,
          });
          return draft;
        })
      );
    },
    [handleClosed]
  );

  const value = useMemo(() => {
    return {
      addAlert,
      alerts,
    };
  }, [addAlert, alerts]);

  return <AlertManagerContext.Provider value={value}>{children}</AlertManagerContext.Provider>;
}

export type { IAlertManagerContext };
export { AlertManagerProvider, AlertManagerContext };
