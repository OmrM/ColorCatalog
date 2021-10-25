import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, } from 'react-native';


//takes in property backGroundColor. also takes in a dummy function. this makes onpress optional in the app() render function
function ColorButton({ backgroundColor, onPress = f => f}){
  return(

  //pass current backgroundColor as argument to onPress
  <TouchableHighlight style = {styles.button} onPress = { () => onPress(backgroundColor) }  underlayColor="orange">
    <View style = {styles.buttonRow}>
      {/* backgroundColor is used from the prop that is passed into the ColorButton Component */}
      <View style = { [ styles.sample, {backgroundColor} ] } />
      <Text style = {styles.buttonText}>{backgroundColor}</Text>
    </View>
  </TouchableHighlight>

  )
}


export default ColorButton;


const styles = StyleSheet.create({
    button:{
      margin: 10,
      padding: 10,
/*       borderWidth: 2, 
      borderColor: '#8c8c8c', */
      borderRadius: 10,
      
      alignSelf: 'stretch',
      backgroundColor: 'rgba(255,255,255, .8)',

    },
    buttonRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonText: {
      /* textAlign: 'center', */
      fontSize: 22,
      color: '#333333'
    },
  
    sample: {
      height: 20,
      width: 20,
      margin: 5,
      borderRadius: 5,
      backgroundColor: 'white',
    }
  });