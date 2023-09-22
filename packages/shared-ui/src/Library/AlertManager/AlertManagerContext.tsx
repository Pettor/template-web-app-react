import type { ReactElement } from "react";
import { createContext, useCallback, useMemo, useState } from "react";
import { Alert } from "Library/Alert/Alert";
import type { AlertOptions } from "Library/Alert/AlertClasses";
import { getCrypto } from "react-utils";

interface IAlertManagerContext {
  addAlert: (alertOptions: AlertOptions) => void;
  alerts: ReactElement[];
}

const AlertManagerContext = createContext<IAlertManagerContext | null>(null);

interface Props {
  children: ReactElement;
}

function AlertManagerProvider({ children }: Props): ReactElement {
  const [alerts, setAlerts] = useState<ReactElement[]>([]);

  const addAlert = useCallback((alertOptions: AlertOptions) => {
    const id = getCrypto().randomUUID();

    setAlerts((prevAlerts) => [...prevAlerts, <Alert key={id} {...alertOptions} />]);
  }, []);

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
