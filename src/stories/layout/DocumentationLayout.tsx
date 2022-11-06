import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  border: "1px solid",
  borderRadius: 10,
  background: "white",
  padding: theme.spacing(2),
}));

interface Props {
  label: string;
  children: React.ReactNode;
}

export function DocumentationLayout({ label, children }: Props) {
  return (
    <Box>
      <Typography variant="h1">{label}</Typography>
      <br />
      <StyledBox>{children}</StyledBox>
    </Box>
  );
}
