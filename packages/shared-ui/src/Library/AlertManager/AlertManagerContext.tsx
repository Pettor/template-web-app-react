import type { ReactElement } from "react";
import { createContext, useCallback, useMemo, useState } from "react";
import { produce } from "immer";
import { getCrypto } from "react-utils";
import { Alert } from "../Alert/Alert";
import type { AlertOptions } from "../Alert/AlertClasses";
import type { AlertManagerAlert } from "./AlertManagerClasses";

interface IAlertManagerContext {
  addAlert: (alertOptions: AlertOptions) => void;
  alerts: AlertManagerAlert[];
  reset: () => void;
}

const AlertManagerContext = createContext<IAlertManagerContext | null>(null);

interface Props {
  children: ReactElement | ReactElement[];
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

  const reset = useCallback(() => {
    setAlerts([]);
  }, []);

  const value = useMemo(() => {
    return {
      addAlert,
      alerts,
      reset,
    };
  }, [addAlert, alerts, reset]);

  return <AlertManagerContext.Provider value={value}>{children}</AlertManagerContext.Provider>;
}

export type { IAlertManagerContext };
export { AlertManagerProvider, AlertManagerContext };
