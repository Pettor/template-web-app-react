import type { ReactElement } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Logo from "../logo/Logo";

export type LogoFullSize = "medium" | "large";

interface Props {
  appName: string;
  size: LogoFullSize;
}

export default function LogoFull({ appName, size = "large" }: Props): ReactElement {
  return (
    <Stack direction="row" spacing={2}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Logo size={size === "large" ? "large" : "medium"} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography fontWeight="normal" variant={size === "large" ? "h2" : "h3"}>
          {appName}
        </Typography>
      </Box>
    </Stack>
  );
}
