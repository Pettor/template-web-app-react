import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const PwaUpdateDialogContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.borderRadius.md,
  margin: theme.spacing(1),
}));

export default PwaUpdateDialogContainer;
