import * as React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { ComponentMeta } from "@storybook/react";
import { DocumentationDecorator } from "../decorators/DocumentationDecorator";
import { DocumentationLayout } from "../layout/DocumentationLayout";

export default {
  title: "Design System/Typograhy",
  decorators: [DocumentationDecorator],
} as ComponentMeta<typeof Typography>;

export const Typograhy = () => (
  <DocumentationLayout label="Typography">
    <Box sx={{ m: 2 }}>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h1" component="div" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom component="div">
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom component="div">
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
          Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
          beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
          Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
      </Box>
      <Box>
        {[300, 400, 500, 700, 900].map((weight) => (
          <Typography key={weight} fontWeight={weight} fontSize="1em" variant="body1">
            {weight} - Font Weight
          </Typography>
        ))}
      </Box>
    </Box>
  </DocumentationLayout>
);
