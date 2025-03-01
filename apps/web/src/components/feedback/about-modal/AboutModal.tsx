import type { ReactElement } from "react";
import type { ModalProps } from "ui-package";
import { Modal } from "ui-package";
import type { AboutDetailsProps } from "../about-details/AboutDetails";
import { AboutDetails } from "../about-details/AboutDetails";

export interface AboutModalProps extends Omit<ModalProps, "children">, AboutDetailsProps {}

export function AboutModal({ open, onClose, ...aboutProps }: AboutModalProps): ReactElement {
  return (
    <Modal open={open} onClose={onClose} className="min-h-96">
      <AboutDetails {...aboutProps} />
    </Modal>
  );
}
