import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('tabs1screen');
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="article" />
        <TouchableIcon iconName="help" />
        <TouchableIcon iconName="toc" />
        <TouchableIcon iconName="search" />
        <TouchableIcon iconName="article" />
      </Text>
    </View>
  );
};
