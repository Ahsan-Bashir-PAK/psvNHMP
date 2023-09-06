import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, Text} from 'react-native';
import AddDriver from '../screens/forms/addDriver';
import AddVehicle from '../screens/forms/addVehicle';
import { getTabBarHeight } from '@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar';
import { UserCircle, User  } from 'lucide-react-native';
import { Pencil, Bus, BusFront } from 'lucide-react-native';
import AddDocumentation from '../screens/forms/addDocumentation';
import AddCondition from '../screens/forms/addCondition';





const Tab =  createBottomTabNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Driver" component={AddDriver} options={{
        
        tabBarIcon:()=>(
          <User  stroke="grey" size={35} fill='white'/>
        )
    }}
    

      />
        <Tab.Screen name="Vehicle Info"  component={AddVehicle} 
        options={{
        
          tabBarIcon:()=>(
            <Bus  stroke="grey" size={35} fill='white' />
          )
      }}
        
        />
        <Tab.Screen name="Bus Root"  component={AddDocumentation}
        options={{
        
          tabBarIcon:()=>(
            <BusFront  stroke="grey" size={35} fill='white' />
          )
      }}
        
        />
         <Tab.Screen name="Bus Data"  component={AddCondition}
        options={{
        
          tabBarIcon:()=>(
            <BusFront  stroke="grey" size={35} fill='white' />
          )
      }}
        
        />
{/*<Tab.Screen name="SettingsScreen4"  component={SettingsScreen}
        options={{
        
          tabBarIcon:()=>(
            <BusFront  stroke="grey" size={35} fill='white' />
          )
      }}
        
        />   */}

        
      </Tab.Navigator>
      </NavigationContainer>
  );
};

export default MyTabs