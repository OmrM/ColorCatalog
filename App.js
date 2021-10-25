import React, {useState} from 'react';
import { FlatList, StyleSheet,View, } from 'react-native';
import ColorButton from './components/ColorButton';
import ColorForm from './components/ColorForm';
import useColors from './hooks/useColors';
import { KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigator from './navigation/MainStackNavigator';

export default function App({navigation}) {
/*   //initial state for background color
  const [backgroundColor, setBackgroundColor] = useState("blue")
  //list of colors and the function to add colors - from the useColors hook
  const { colors, addColor } = useColors(); */

  return (
  
  <NavigationContainer>
    <MainStackNavigator/>


  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeScreenContainer:{
    flexGrow:1,
    flexDirection: 'column',
    backgroundColor: '#e6e6e6'
  },
  container: {
    flex: 1,
    display: 'flex',

  },
});
