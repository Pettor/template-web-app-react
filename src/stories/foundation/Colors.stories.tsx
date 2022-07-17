import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Box from "@mui/system/Box";
import { Meta } from "@storybook/react";
import { DocumentationDecorator } from "../decorators/DocumentationDecorator";

export default {
  title: "Design System/Colors",
  decorators: [DocumentationDecorator],
} as Meta;

const ColorItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginTop: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary,
  borderRadius: 10,
  width: "100%",
  height: 30,
}));

const ColorStack = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

const ColorGroup = (label: string, group: string) => (
  <ColorStack>
    {label}:
    <Stack direction="column">
      <ColorItem sx={{ color: `${group}.contrastText`, backgroundColor: `${group}.main` }}>Main</ColorItem>
      <ColorItem sx={{ color: `${group}.contrastText`, backgroundColor: `${group}.light` }}>Light</ColorItem>
      <ColorItem sx={{ color: `${group}.contrastText`, backgroundColor: `${group}.dark` }}>Dark</ColorItem>
    </Stack>
  </ColorStack>
);

export const Colors = () => (
  <Box sx={{ width: "100%", p: 2 }}>
    <Stack direction="row" sx={{ width: "100%" }}>
      {ColorGroup("Primary", "primary")}
      {ColorGroup("Secondary", "secondary")}
      {ColorGroup("Info", "info")}
      {ColorGroup("Success", "success")}
      {ColorGroup("Warning", "warning")}
      {ColorGroup("Error", "error")}
    </Stack>
  </Box>
);
