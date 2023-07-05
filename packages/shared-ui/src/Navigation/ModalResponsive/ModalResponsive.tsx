import type { ReactElement } from "react";
import { Modal } from "@mui/material";
import type { ModalProps } from "@mui/material/Modal";
import { ModalResponsiveContent } from "./ModalResponsiveContent";

export interface ModalResponsiveProps extends Omit<ModalProps, "children"> {
  children?: ReactElement;
}

export function ModalResponsive(props: ModalResponsiveProps): ReactElement {
  const { children } = props;

  return (
    <Modal {...(props as ModalProps)}>
      <ModalResponsiveContent>{children}</ModalResponsiveContent>
    </Modal>
  );
}
