export default function useAppInfo() {
  const appName = "Web App";
  const appNameCapital = appName.toUpperCase();

  return {
    appName,
    appNameCapital,
  };
}
