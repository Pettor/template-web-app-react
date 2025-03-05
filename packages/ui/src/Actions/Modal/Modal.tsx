import type { ReactNode, MouseEvent } from "react";
import { type ReactElement, useRef, useEffect } from "react";
import clsx from "clsx";
import { getCrypto } from "react-package";

export interface ModalProps {
  open: boolean;
  onClose(): void;
  className?: string;
  children: ReactNode;
}

export function Modal({ open, onClose, className, children }: ModalProps): ReactElement {
  const ref = useRef<HTMLDialogElement>(null);
  const dialogId = getCrypto().randomUUID();

  useEffect(() => {
    if (open && ref.current) {
      ref.current.showModal();
    } else if (ref.current) {
      ref.current.close();
    }
  }, [open]);

  function handleOnClose(e: MouseEvent): void {
    e.preventDefault();
    onClose();
  }

  return (
    <dialog id={dialogId} className="modal" ref={ref}>
      <div className={clsx(className, "modal-box")}>
        <form method="dialog">
          <button className="btn btn-circle btn-ghost btn-sm absolute top-2 right-2" onClick={handleOnClose}>
            ✕
          </button>
        </form>
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={handleOnClose} />
      </form>
    </dialog>
  );
}
