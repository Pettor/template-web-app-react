import type { ReactElement } from "react";
import { useAlertManager } from "./UseAlertManager";

export function AlertManager(): ReactElement {
  const { alerts } = useAlertManager();
  console.log(alerts);

  return <div>{alerts.map((alert) => alert)}</div>;
}
