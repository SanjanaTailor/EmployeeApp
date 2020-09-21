/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import Home from './Rout';
import {Store} from './src/store';

const App = () => {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
};
export default App;
