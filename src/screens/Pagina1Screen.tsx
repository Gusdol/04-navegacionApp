import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, Text, View, TouchableOpacity} from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {colores, styles} from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft: 10}} onPress={ () => navigation.toggleDrawer()}>
          <Icon name="article" size={50} color={colores.primary} />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1</Text>

      <Button
        title="ir pagina 2"
        onPress={() => navigation.navigate('Pagina2')}
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: 'blue'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: 'orange'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Carla',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Carla</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="ir persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      />
    </View>
  );
};
