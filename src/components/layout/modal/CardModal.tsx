import { ReactElement, ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { ModalProps } from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import { getWordyDateFormat } from "../../../libs/functions/date/Format";
import ResponsiveModal from "./ResponsiveModal";

type Props = Omit<ModalProps, "children"> & {
  title: string;
  date: Date;
  color?: string;
  onClose: () => void;
  children?: ReactNode | ReactNode[];
};

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  minHeight: "inherit",
  width: "80vw",
  maxWidth: "1000px",
  borderRadius: theme.borderRadius.default,

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

function CardModal(props: Props): ReactElement {
  const { title, date, color, onClose, children } = props;

  return (
    <ResponsiveModal {...(props as ModalProps)}>
      <StyledCard>
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
      </StyledCard>
    </ResponsiveModal>
  );
}

export default CardModal;
