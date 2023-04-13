import type { ReactElement } from "react";
import type { ModalProps } from "@mui/material/Modal";
import Modal from "@mui/material/Modal";
import ModalResponsiveContent from "./ModalResponsiveContent";

interface Props extends Omit<ModalProps, "children"> {
  children?: JSX.Element | JSX.Element[];
}

function ModalResponsive(props: Props): ReactElement {
  const { children } = props;

  return (
    <Modal {...(props as ModalProps)}>
      <ModalResponsiveContent>{children}</ModalResponsiveContent>
    </Modal>
  );
}

export default ModalResponsive;
