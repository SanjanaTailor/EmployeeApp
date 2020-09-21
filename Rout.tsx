import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import {navigationRef} from './src/RootNavigation';
export const RootStack = createStackNavigator();
function Home()  {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName={'Login'}>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Dashboard" component={Dashboard} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
export default Home;
