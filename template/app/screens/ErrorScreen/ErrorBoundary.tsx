import React, { ReactNode } from 'react';
import { ErrorDetails } from './ErrorDetail';

import { ErrorBoundary as RNErrorBoundary } from 'react-error-boundary';

export function ErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <RNErrorBoundary FallbackComponent={ErrorDetails}>
      {children}
    </RNErrorBoundary>
  );
}
