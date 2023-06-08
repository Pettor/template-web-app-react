export function useAppInfo(): {
  appName: string;
  appNameCapital: string;
} {
  const appName = "Web App";
  const appNameCapital = appName.toUpperCase();

  return {
    appName,
    appNameCapital,
  };
}
