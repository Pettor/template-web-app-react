import type { ReactElement } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Logo } from "../../Library/Logo";

export type LogoFullSize = "medium" | "large";

export interface LogoFullProps {
  appName: string;
  size: LogoFullSize;
}

export function LogoFull({ appName, size = "large" }: LogoFullProps): ReactElement {
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
