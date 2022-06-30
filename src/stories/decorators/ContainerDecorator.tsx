/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@mui/material/Container";

export const ContainerDecorator = (story: any) => <Container maxWidth="sm">{story()}</Container>;
