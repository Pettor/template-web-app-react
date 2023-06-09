import type { ReactElement } from "react";
import { Modal } from "@mui/material";
import type { ModalProps } from "@mui/material/Modal";
import { ModalResponsiveContent } from "./ModalResponsiveContent";

interface Props extends Omit<ModalProps, "children"> {
  children?: ReactElement;
}

export function ModalResponsive(props: Props): ReactElement {
  const { children } = props;

  return (
    <Modal {...(props as ModalProps)}>
      <ModalResponsiveContent>{children}</ModalResponsiveContent>
    </Modal>
  );
}
