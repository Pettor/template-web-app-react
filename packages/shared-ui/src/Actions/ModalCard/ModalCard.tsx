import type { ReactElement } from "react";
import type { ModalProps } from "Actions";
import { Modal } from "Actions";

export interface ModalCardProps extends Omit<ModalProps, "children"> {
  title: string;
  onClose: () => void;
  children: ReactElement | ReactElement[];
}

export function ModalCard({ title, children, ...modalProps }: ModalCardProps): ReactElement {
  return (
    <Modal {...modalProps}>
      <form method="dialog">
        <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
      </form>
      <span className="text-lg font-bold">{title}</span>
      <div className="py-4">{children}</div>
    </Modal>
  );
}
