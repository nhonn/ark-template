import { Box, Center } from 'native-base';
import React, { ErrorInfo } from 'react';
import { Text } from 'react-native';

export interface ErrorDetailsProps {
  error: Error;
  errorInfo: ErrorInfo;
  onReset(): void;
}

export function ErrorDetails() {
  return (
    <Box safeArea height="full" width="full">
      <Center>
        <Text>Something went wrong</Text>
      </Center>
    </Box>
  );
}
