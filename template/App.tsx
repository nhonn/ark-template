import { NativeBaseProvider } from 'native-base';
import React from 'react';
import 'react-native-gesture-handler';
import i18n from './app/i18n';
import { AppNavigator } from './app/navigators';
import { ErrorBoundary } from './app/screens';

i18n;

/**
 * This is the root component of our app.
 */
function App() {
  return (
    <NativeBaseProvider>
        <ErrorBoundary>
          <AppNavigator />
        </ErrorBoundary>
    </NativeBaseProvider>
  );
}

export default App;
