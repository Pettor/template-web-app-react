import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const PwaUpdateDialogDescription = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.body2,
  },
}));

export default PwaUpdateDialogDescription;
