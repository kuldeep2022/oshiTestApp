/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './screens/dashboard';
import Camera from './screens/camera';
import ImageView from './screens/imageView';

const Stack = createNativeStackNavigator();

const App = () => {

return(
<NavigationContainer>

<Stack.Navigator>
  <Stack.Screen
  name="Dashboard"
  component={Dashboard}
  options={{headerShown:false}}
  />
  <Stack.Screen 
  name='Camera'
  component={Camera}
  options={{headerShown:false}}
  
  />
  <Stack.Screen 
  name='ImageView'
  component={ImageView}
  options={{headerShown:false}}
  
  />
  
</Stack.Navigator>

</NavigationContainer>
)

}


export default App;
