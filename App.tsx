/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
import Login from './screens/login';
import MyStack from './Navigations/navigation';
import Main from './screens/main';
import MyTabs from './Navigations/tabnavigation';
import AddVehicle from './screens/forms/addVehicle';
import AddDocumentation from './screens/forms/addDocumentation';
import AddCondition from './screens/forms/addCondition';
import AddOtherInfo from './screens/forms/addOtherinfo';
import TripReport from './screens/forms/tripReport';


function App(): JSX.Element {
  
  return (
    
    //<MyStack />
    //<Main />
   //<MyTabs />
//  <AddVehicle/>
   // <AddDocumentation/>
   //<AddCondition/>
    //<AddOtherInfo/>
    <TripReport/>
    
  );
}

export default App;
