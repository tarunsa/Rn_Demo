import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './Signin';
import Signup from './Signup';
import Home from './Home';
import Loading from './Loading';
const Stack = createStackNavigator()
export default function MainStack(){
    return(
        <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name={'Loading'} component={Loading} options={{ headerShown: false }}/> */}
      <Stack.Screen name='Login' component={Signin}  options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={Signup}  options={{ headerShown: false }}/>
        <Stack.Screen name='Home' component={Home}   />
      </Stack.Navigator>
    </NavigationContainer>
    )
}


