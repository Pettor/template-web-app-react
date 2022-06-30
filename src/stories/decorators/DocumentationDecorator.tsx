/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";

export const DocumentationDecorator = (story: any) => <Box>{story()}</Box>;
