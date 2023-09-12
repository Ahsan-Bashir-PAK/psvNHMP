import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Home from '../screens/home';
import Driver from '../screens/forms/addDrivernew';
import AddVehicle from '../screens/forms/addVehicle';
import MyTabs from './tabnavigation';
import TripReport from '../screens/forms/tripReport';
import AddDocumentation from '../screens/forms/addDocumentation';



const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name="Home" component={Home}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name="Driver" component={Driver} />
        <Stack.Screen name="TripReport" component={TripReport} />
        <Stack.Screen name="AddDocumentation" component={AddDocumentation} />
        <Stack.Screen name="AddVehicle" component={MyTabs} 
        options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
     </NavigationContainer>
  );
};

export default MyStack