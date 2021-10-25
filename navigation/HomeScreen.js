import React, {useState} from 'react';
import { FlatList, StyleSheet,View, } from 'react-native';
import ColorButton from '../components/ColorButton';
import ColorForm from '../components/ColorForm';
import useColors from '../hooks/useColors';

import KeyboardSpacer from 'react-native-keyboard-spacer';
import { StatusBar } from 'expo-status-bar';

export default HomeScreen = ({navigation}) => {
      //initial state for background color
  const [backgroundColor, setBackgroundColor] = useState("blue")
  //list of colors and the function to add colors - from the useColors hook
  const { colors, addColor } = useColors();
    return( 
        
        <View style = {styles.homeScreenContainer}> 
        
        <StatusBar style="light" />
        <FlatList style = {[ styles.container, {backgroundColor} ]} 
          //data = used to be data from a json file. now it's a state variable for colors
          data = {colors}
          renderItem = { ({item}) => {
          //"item" is each object in the json data 
          //a unique key is also needed for each of the color buttons. we'll use the item's unique id from the json data file
          //for each item in the data, we render a colorButton component
            return (
              <ColorButton 
              key = {item.id} 
              backgroundColor = {item.color} 
              onPress = {setBackgroundColor} 
              />
            )
          }}
        />
         
        
        <ColorForm onNewColor = {addColor}/>
       <KeyboardSpacer/>
  
      
    </View>
    )
}


const styles = StyleSheet.create({
    homeScreenContainer:{
      flex:1,
      /* flexDirection: 'column', */
      backgroundColor: '#f2f2f2',
      
    },
    container: {
      flex:.8,
    },
  });
  