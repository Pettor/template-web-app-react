import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import useAppInfo from "../../../libs/app/hooks/AppInfo";
import Logo from "./Logo";

export type LogoFullSize = "medium" | "large";

type Props = {
  size: LogoFullSize;
};

const NameTypography = styled(Typography)(() => ({
  fontWeight: "normal",
}));

const LogoFull = ({ size = "large" }: Props) => {
  const { appNameCapital } = useAppInfo();

  return (
    <Stack direction="row" spacing={2}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Logo size={size === "large" ? "large" : "medium"} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <NameTypography variant={size === "large" ? "h2" : "h3"}>{appNameCapital}</NameTypography>
      </Box>
    </Stack>
  );
};

export default LogoFull;
