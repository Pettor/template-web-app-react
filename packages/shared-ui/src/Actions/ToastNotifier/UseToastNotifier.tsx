import { useSetAtom } from "jotai";
import { toastAddAtom, toastClearAtom } from "./Atoms/ToastAtoms";

export function useToastNotifier(): {
  addToast: (message: string) => void;
  clearToasts: () => void;
} {
  const addToast = useSetAtom(toastAddAtom);
  const clearToasts = useSetAtom(toastClearAtom);

  return {
    addToast,
    clearToasts,
  };
}
