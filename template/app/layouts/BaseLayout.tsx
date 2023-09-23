import { Box } from "native-base";
import React from "react";

export const BaseLayout = ({children}) => (
  <Box safeArea height="full" width="full">
    {children}
  </Box>
)