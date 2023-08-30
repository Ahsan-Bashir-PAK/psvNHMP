import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, Text} from 'react-native';

import AddDriver from '../screens/forms/addDriver';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}



const Tab =  createBottomTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Driver" component={AddDriver}/>
        <Tab.Screen name="SettingsScreen"  component={SettingsScreen} />
      </Tab.Navigator>
      </NavigationContainer>
  );
};

export default MyTabs