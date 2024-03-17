import type { ReactElement } from "react";
import { useAtom } from "jotai";
import { themeModeEffect } from "~/components/actions/theme-switch";

export interface AppThemeProps {
  children: ReactElement;
}

export function AppTheme({ children }: AppThemeProps): ReactElement {
  useAtom(themeModeEffect);

  return <>{children}</>;
}
