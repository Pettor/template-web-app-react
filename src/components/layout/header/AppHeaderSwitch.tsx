import { ComponentProps, useMemo } from "react";
import AppHeader from "./AppHeader";

interface Props {
  firstProps: ComponentProps<typeof AppHeader>;
  secondProps: ComponentProps<typeof AppHeader>;
  toggle: boolean;
}

export default function AppHeaderSwitch({ firstProps, secondProps, toggle }: Props) {
  const header = useMemo(() => {
    if (!toggle) {
      return <AppHeader {...firstProps} />;
    }

    return <AppHeader {...secondProps} />;
  }, [toggle]);

  return <>{header}</>;
}
