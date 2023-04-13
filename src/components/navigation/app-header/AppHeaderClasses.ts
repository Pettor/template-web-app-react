import type { ReactElement } from "react";

interface AppHeaderOptions {
  subheader?: boolean;
  label?: string;
  onBack?(): void;
}

interface AppHeaderComponentOptions {
  flexItem?: boolean;
  fill?: boolean;
}

interface AppHeaderComponents {
  headerComponents?: ReactElement | ReactElement[];
  headerComponentOptions?: AppHeaderComponentOptions;
}

export type { AppHeaderOptions, AppHeaderComponentOptions, AppHeaderComponents };
