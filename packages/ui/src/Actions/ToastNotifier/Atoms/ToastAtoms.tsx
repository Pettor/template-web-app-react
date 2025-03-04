import type { ReactElement } from "react";
import { atom } from "jotai";
import { getCrypto } from "react-package";
import { Toast } from "../../Toast/Toast";

export const toastAtom = atom<ReactElement[]>([]);

// Derived
export const toastCountAtom = atom((get) => get(toastAtom).length);
export const toastAddAtom = atom(null, (get, set, message: string) => {
  const id = getCrypto().randomUUID();
  set(toastAtom, (prev) => [
    ...prev,
    <Toast
      key={id}
      message={message}
      severity="info"
      onClose={() => set(toastAtom, (prev) => [...prev.filter((element) => element.key !== id)])}
      disablePosition
    />,
  ]);
});
export const toastClearAtom = atom(null, (get, set) => set(toastAtom, []));
