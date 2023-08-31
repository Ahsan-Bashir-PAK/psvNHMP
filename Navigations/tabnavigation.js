import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, Text} from 'react-native';

import AddDriver from '../screens/forms/addDriver';
import { getTabBarHeight } from '@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar';
import { UserCircle, User  } from 'lucide-react-native';
import { Pencil } from 'lucide-react-native';


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
      <Tab.Screen name="Driver" component={AddDriver} options={{
        
        tabBarIcon:()=>(
          <User  stroke="blue" size={35} fill='white'/>
        )
    }}
    Style={{color:'red'}}

      />
        <Tab.Screen name="SettingsScreen"  component={SettingsScreen} />
        <Tab.Screen name="SettingsScreen2"  component={SettingsScreen} />
        <Tab.Screen name="SettingsScreen3"  component={SettingsScreen} />
      </Tab.Navigator>
      </NavigationContainer>
  );
};

export default MyTabs