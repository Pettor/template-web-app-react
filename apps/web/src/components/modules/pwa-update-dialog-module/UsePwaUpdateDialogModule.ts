import { useAppInfo } from "~/core/config/UseAppInfo";

export function usePwaUpdateDialogModule(): {
  applicationName: string;
} {
  const { appName } = useAppInfo();

  return {
    applicationName: appName,
  };
}
