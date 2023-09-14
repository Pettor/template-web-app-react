import { AutoAlert } from "Library/Alert/AutoAlert";
import { useAlertManager } from "./UseAlertManager";

export function AlertManager() {
  const { alerts } = useAlertManager();
  console.log(alerts);

  return <div>{alerts.map((alert) => alert)}</div>;
}
