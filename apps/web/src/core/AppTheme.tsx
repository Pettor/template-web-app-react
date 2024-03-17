import type { ReactElement } from "react";
import { useTheme } from "~/classes/theme/UseTheme";

export interface AppThemeProps {
  children: ReactElement;
}

export function AppTheme({ children }: AppThemeProps): ReactElement {
  useTheme();
  return <>{children}</>;
}
