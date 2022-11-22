/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";

export function CommonDecorator(story: any) {
  return <Box sx={{ p: 2 }}>{story()}</Box>;
}
