import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../../screens/ChatScreen';
import {ContactScreen} from '../../screens/ContactScreen';
import {AlbumsScreen} from '../../screens/AlbumsScreen';
import {colores} from '../../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
  return (
    <Tab.Navigator
      //   style={{paddingTop}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        pressColor: colores.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colores.primary,
        },
        style: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'hdr-enhanced-select';
              break;
            case 'Contact':
              iconName = 'hdr-enhanced-select';
              break;
            case 'Albums':
              iconName = 'hdr-enhanced-select';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
