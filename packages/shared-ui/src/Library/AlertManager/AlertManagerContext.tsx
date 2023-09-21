import { AutoAlert } from "Library/Alert/AutoAlert";
import type { ReactElement } from "react";
import { createContext, useMemo, useState } from "react";

interface IAlertManagerContext {
  addAlert: (message: string) => void;
  alerts: ReactElement[];
}

const AlertManagerContext = createContext<IAlertManagerContext | null>(null);

interface Props {
  children: ReactElement;
}

function AlertManagerProvider({ children }: Props): ReactElement {
  const [alerts, setAlerts] = useState<ReactElement[]>([]);

  function addAlert(message: string) {
    const id = Math.random().toString(36).substr(2, 9);

    setAlerts((prevAlerts) => [...prevAlerts, <Alert key={id} text={message} autoClose timeout={2000} />]);
  }

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
