import type { ReactElement } from "react";
import CloseIcon from "@mui/icons-material/Close";
import type { ModalProps } from "@mui/material";
import { CardContent, CardHeader, IconButton } from "@mui/material";
import { ModalResponsive } from "../../Navigation";
import { ModalCardContainer } from "./ModalCardContainer";

interface Props extends Omit<ModalProps, "children"> {
  title: string;
  date: Date;
  color?: string;
  onClose: () => void;
  children?: ReactElement | ReactElement[];
}

export function ModalCard(props: Props): ReactElement {
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
          subheader={date.toLocaleString()}
          sx={{ background: color }}
        />
        <CardContent>{children}</CardContent>
      </ModalCardContainer>
    </ModalResponsive>
  );
}
