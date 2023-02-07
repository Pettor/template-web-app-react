interface UseAppInfo {
  appName: string;
  appNameCapital: string;
}

export default function useAppInfo(): UseAppInfo {
  const appName = "Web App";
  const appNameCapital = appName.toUpperCase();

  return {
    appName,
    appNameCapital,
  };
}
