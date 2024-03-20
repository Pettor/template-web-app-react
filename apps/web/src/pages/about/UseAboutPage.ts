import { useNavigate } from "react-router-dom";
import type { AboutViewProps } from "~/components/views/about/AboutView";
import { useAppInfo } from "~/core/config/UseAppInfo";

export function useAboutPage(serverVersion: string): AboutViewProps {
  const { appName } = useAppInfo();
  const navigate = useNavigate();

  function handleOnBack(): void {
    navigate(-1);
  }

  return { appVersion: import.meta.env.VITE_APP_VERSION, serverVersion, appName, onBack: handleOnBack };
}
