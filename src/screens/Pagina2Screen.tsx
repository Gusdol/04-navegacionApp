import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
interface Props extends StackScreenProps<any, any> {}
export const Pagina2Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'holaMundo',
      headerBackTitle: 'Atras',
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2</Text>

      <Button
        title="ir pagina 3"
        onPress={() => navigation.navigate('Pagina3')}
      />
    </View>
  );
};
