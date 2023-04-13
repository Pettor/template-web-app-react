import type { ReactElement } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import type { ModalProps } from "@mui/material/Modal";
import ModalResponsive from "../modal-responsive/ModalResponsive";
import ModalCardContainer from "./ModalCardContainer";
import { getWordyDateFormat } from "~/libs/functions/date/Format";

interface Props extends Omit<ModalProps, "children"> {
  title: string;
  date: Date;
  color?: string;
  onClose: () => void;
  children?: ReactElement | ReactElement[];
}

function ModalCard(props: Props): ReactElement {
  const { title, date, color, onClose, children } = props;

  return (
    <ModalResponsive {...(props as ModalProps)}>
      <ModalCardContainer>
        <CardHeader
          action={
            <IconButton aria-label="close" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          }
          title={title}
          subheader={getWordyDateFormat(date)}
          sx={{ background: color }}
        />
        <CardContent>{children}</CardContent>
      </ModalCardContainer>
    </ModalResponsive>
  );
}

export default ModalCard;
