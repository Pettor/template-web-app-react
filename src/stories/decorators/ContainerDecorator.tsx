/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@mui/material/Container";

export default function ContainerDecorator(story: any) {
  return <Container maxWidth="sm">{story()}</Container>;
}
