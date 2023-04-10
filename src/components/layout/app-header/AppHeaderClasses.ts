import type { ReactElement } from "react";

interface AppHeaderComponentOptions {
  flexItem?: boolean;
  fill?: boolean;
}

interface AppHeaderComponents {
  headerComponents?: ReactElement | ReactElement[];
  headerComponentOptions?: AppHeaderComponentOptions;
}

export type { AppHeaderComponentOptions, AppHeaderComponents };
