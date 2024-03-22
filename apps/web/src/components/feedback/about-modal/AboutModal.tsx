import type { ReactElement } from "react";
import type { ModalProps } from "shared-ui";
import { Modal } from "shared-ui";
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
