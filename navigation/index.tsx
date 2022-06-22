/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';



import Assets from '../screens/Assets';
import Home from '../screens/Home';
import Users from '../screens/Users';
import  Units from '../screens/Units';
import Companies from '../screens/Companies';
import { Icon } from '@ant-design/react-native';


export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
     
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    
      
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {


  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      
>
      <BottomTab.Screen
        name="Assets"
        component={Assets}
        options={{
          headerShown: false,
          title: 'Assets',
          tabBarIcon: ({color})=> <TabBarIcon color='black' name='tool' />,
          
        }}
      />
      <BottomTab.Screen
        name="Users"
        component={Users}
        options={{
          headerShown: false,
          title: 'Users',
          tabBarIcon: ({color})=> <TabBarIcon color='black' name='team' />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({color})=> <TabBarIcon color='black' name='home' />,
        }}
      />
      <BottomTab.Screen
        name="Units"
        component={Units}
        options={{
          headerShown: false,
          title: 'Units',
          tabBarIcon: ({color})=> <TabBarIcon color='black' name='tagso' />,
        }}
      />
      <BottomTab.Screen
        name="Companies"
        component={Companies }
        options={{
          headerShown: false,
          title: 'Companies',
          tabBarIcon: ({color})=> <TabBarIcon color='black' name='isv' />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>['name'];
  color: string;
}) {
  return <AntDesign size={32} style={{ marginBottom: -3 }} {...props} />;
}
