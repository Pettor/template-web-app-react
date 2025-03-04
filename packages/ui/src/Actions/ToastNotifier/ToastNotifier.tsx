import type { ReactElement } from "react";
import { useAtomValue } from "jotai";
import { toastAtom } from "./Atoms/ToastAtoms";

export function ToastNotifier(): ReactElement {
  const toasts = useAtomValue(toastAtom);

  return <div className="stack absolute right-5 bottom-5">{toasts}</div>;
}
