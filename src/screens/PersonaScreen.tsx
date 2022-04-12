import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../components/navigator/StackNavigator';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

// interface RouterParams {
//   id: number;
//   nombre: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const {changeUserName} = useContext(AuthContext);
  const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);
  useEffect(() => {
    changeUserName(params.nombre);
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
