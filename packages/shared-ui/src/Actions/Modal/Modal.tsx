import type { ReactNode } from "react";
import { useMemo, type ReactElement } from "react";
import { getCrypto } from "react-utils";

export interface ModalProps {
  open: boolean;
  children: ReactNode;
}

export function Modal({ open, children }: ModalProps): ReactElement {
  const dialogId = useMemo(() => getCrypto().randomUUID(), []);

  return (
    <dialog id={`modal__${dialogId}`} className="modal" open={open}>
      <div className="modal-box min-h-48">{children}</div>
    </dialog>
  );
}
