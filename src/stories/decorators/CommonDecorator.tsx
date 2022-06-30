/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";

export const CommonDecorator = (story: any) => <Box sx={{ p: 2 }}>{story()}</Box>;
