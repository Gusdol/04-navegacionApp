import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Platform, Text} from 'react-native';
import {Tab1Screen} from '../../screens/Tab1Screen';
// import {Tab2Screen} from '../../screens/Tab2Screen';
// import {Tab3Screen} from '../../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../../theme/appTheme';

import {TopTapNavigator} from './TopTapNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottonTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colores.primary}}>
      <BottonTabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'tab1'}}
        component={Tab1Screen}
      />
      <BottonTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'tab2'}}
        component={TopTapNavigator}
      />
      <BottonTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottonTabAndroid.Navigator>
  );
};

const BottonTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottonTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: colores.primary,
        style: {
          borderTopColor: colores.primary,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'search';
              break;
            case 'Tab2Screen':
              iconName = 'search';
              break;
            case 'StackNavigator':
              iconName = 'search';
              break;
          }
          return <Icon name={iconName} size={80} color={color} />;
        },
      })}>
      <BottonTabIOS.Screen
        name="Tab1Screen"
        // options={{title: 'tab1', tabBarIcon: () => <Text>T1</Text>}}
        options={{title: 'tab1'}}
        component={Tab1Screen}
      />
      <BottonTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'tab2'}}
        component={TopTapNavigator}
      />
      <BottonTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </BottonTabIOS.Navigator>
  );
};
