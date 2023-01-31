import Box from "@mui/material/Box";

export default function MaxWidthDecorator(story: any) {
  return <Box sx={{ maxWidth: 300 }}>{story()}</Box>;
}
