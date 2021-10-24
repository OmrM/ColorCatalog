import React, { useState, useRef } from "react";
import { StyleSheet, View, TextInput, Button, Keyboard } from "react-native";




function ColorForm( {onNewColor = f => f} ) {
    //dummy function f. makes sure onNewColor property defaults to a function
    const [inputValue, setInputValue] = useState("")
    const input = useRef()

    return (
        <View style = { styles.container}>

            <TextInput style = {styles.txtInput} 
                autoCapitalize = 'none'
                placeholder = "Enter a Color..."
                value = {inputValue}
                onChangeText = {setInputValue}
            />
            <Button title = "add" 
            //blur-makes keyboard go away. onNewColor-our function referenced in app.js-takes inputValue from state. setInputValue clears textInput state
                onPress = { () => { 
                    Keyboard.dismiss();
                    onNewColor(inputValue);
                    setInputValue(""); }}
            />

        </View>

    )
}

export default ColorForm;

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtInput:{
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        margin: 5,
        borderRadius: 5,
        padding: 5
    }
})