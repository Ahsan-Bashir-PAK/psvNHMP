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

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }
// function VehicleInfo() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>dfdsfdsfdsfdsfd//</Text>
//     </View>
//   );
// }




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
        {/* <Tab.Screen name="Bus Root"  component={SettingsScreen}
        options={{
        
          tabBarIcon:()=>(
            <BusFront  stroke="grey" size={35} fill='white' />
          )
      }}
        
        />
        <Tab.Screen name="Bus Data"  component={SettingsScreen}
        options={{
        
          tabBarIcon:()=>(
            <BusFront  stroke="grey" size={35} fill='white' />
          )
      }}
        
        />
<Tab.Screen name="SettingsScreen4"  component={SettingsScreen}
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