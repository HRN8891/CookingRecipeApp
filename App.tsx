/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AuthProvider} from './src/contexts/AuthContext';
import {Router} from './src/routes/Router';

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

// MARK: - Handle App or Storybook flow
export default App;
// export default StorybookUIRoot;
