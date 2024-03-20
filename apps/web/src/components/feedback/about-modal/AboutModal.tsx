import type { ReactElement } from "react";
import type { ModalProps } from "shared-ui";
import { Modal } from "shared-ui";
import type { AboutProps } from "../about/About";
import { About } from "../about/About";

export interface AboutModalProps extends Omit<ModalProps, "children">, AboutProps {}

export function AboutModal({ open, onClose, ...aboutProps }: AboutModalProps): ReactElement {
  return (
    <Modal open={open} onClose={onClose} className="min-h-96">
      <About {...aboutProps} />
    </Modal>
  );
}
