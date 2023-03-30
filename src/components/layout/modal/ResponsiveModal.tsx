import type { ReactElement } from "react";
import Box from "@mui/material/Box";
import type { ModalProps } from "@mui/material/Modal";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

type Props = Omit<ModalProps, "children"> & {
  children?: JSX.Element | JSX.Element[];
};

const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  minWidth: "500px",
  minHeight: "600px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: theme.palette.background.default,
  borderRadius: theme.borderRadius.default,

  [theme.breakpoints.down("md")]: {
    minWidth: "100%",
    maxWidth: "100%",
    width: "100%",
    minHeight: "100dvh",
    borderRadius: 0,
  },
}));

function ResponsiveModal(props: Props): ReactElement {
  const { children } = props;

  return (
    <Modal {...(props as ModalProps)}>
      <ModalBox>{children}</ModalBox>
    </Modal>
  );
}

export default ResponsiveModal;
