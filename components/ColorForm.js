import React, { useState, useRef } from "react";
import { StyleSheet, View, TextInput, Button, Keyboard, TouchableHighlight, Text, KeyboardAvoidingView, Platform} from "react-native";




function ColorForm( {onNewColor = f => f} ) {
    //dummy function f. makes sure onNewColor property defaults to a function
    const [inputValue, setInputValue] = useState("")
    const input = useRef()

    return (
        <View style = {styles.container} >
       
            
            <TextInput style = {styles.txtInput} 
                autoCapitalize = 'none'
                placeholder = "Enter a Color..."
                value = {inputValue}
                onChangeText = {setInputValue}
                 //keyboardavoidingview alternative?
            />
            
        <View style =  { styles.addButtonView }>
            <TouchableHighlight onPress = { () => { 
                    Keyboard.dismiss();
                    onNewColor(inputValue);
                    setInputValue(""); }} style = {styles.addButton}>
                
                    <Text style = {styles.buttonText}>+</Text>
                
            </TouchableHighlight>
        </View>

       
        </View>

    )
}

export default ColorForm;

const styles = StyleSheet.create({
    container: {
        flex: .2, //bottom white area takes up 8% of the whole screen
        
        flexDirection: 'row', //whole bottom white area is organized horizontally
        alignItems: 'center', //the textbox and the button are spaced out evenly
        paddingHorizontal: 30,
        justifyContent: 'flex-end',
        padding: 10,
        paddingTop: 5,
       
        borderRadius: 60, //rouuund

        backgroundColor: '#f2f2f2',
    },
    txtInput:{
        flex: 1,
        padding:15,
        paddingLeft: 15,
        alignItems: 'flex-start', 
        borderWidth: 3,
        fontSize: 20,
        margin: 0,
        borderRadius: 17,
        borderColor: '#8c8c8c',
        
    },



    addButtonView:{
        flex: .1, //button takes up 20% of bottom row area, textbox takes 80
        alignItems: 'center',
        padding: 20,

        flexDirection: 'row',

    },

    addButton:{
        //flexDirection of parent: row
        //this is directed horizontally
        padding: 0,
        width: 60,
        height: 60,
        backgroundColor: '#8c8c8c',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 0.2,
        shadowOffset: {width: 0 , height: 4},
        
        
    },

    buttonText:{
        color:'#FFF',
        fontSize:30,
      /*  paddingHorizontal: 30, */
        
      },
})


