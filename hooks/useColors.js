import { useEffect, useState } from "react"
import { generate } from "shortid";
import { AsyncStorage } from "react-native";
//AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage'

//custom hook to add new colors
const useColors = () => {
    //inital state for colors that are to be displayed and edited by user
    const [colors, setColors] = useState([])

    //async function to load saved colors
    const loadColors = async () => {
        //need await keyword- asyncStorage returns a promise and we need to wait for it to resolve before we have any color data
        const colorData = await AsyncStorage.getItem("@ColorListStore: Colors");
        
        if(colorData){
        //if colorData exists, set colors in state
            const colors = JSON.parse(colorData); //converts string to an array
            setColors(colors);
        }
    }

    //LOAD COLORS. will only get invoked at initial render bc it has an empty dependency array
    useEffect(() => {
        if(colors.length) return; //breaks out of hook if there's already items in the colors array
        loadColors();
    }, [])

    //SAVE COLORS. this useEffect gets called whenever there's a change to the colors array
    useEffect(() => {
        AsyncStorage.setItem("@ColorListStore: Colors", JSON.stringify(colors));
    }, [colors])



    //function to add colors. using shortID to generate unique IDs for the color objects
    const addColor = color => {
      const newColor = { id: generate(), color }
      //array spread operator. appends new colors to existing array
      setColors([ newColor, ...colors])
    }
    //exposes the list of colors to the consumer of this hook. 
    //returns an object (colors) and a function for adding colors
    return { colors, addColor }
}

export default useColors;



















/* import { useState } from "react"
import { generate } from "shortid";

//custom hook to add new colors
const useColors = () => {
    //inital state for colors that are to be displayed and edited by user
    const [colors, setColors] = useState([])
    //function to add colors. using shortID to generate unique IDs for the color objects
    const addColor = color => {
      const newColor = { id: generate(), color }
      //array spread operator. appends new colors to existing array
      setColors([ newColor, ...colors])
    }
    //exposes the list of colors to the consumer of this hook. 
    //returns an object (colors) and a function for adding colors
    return { colors, addColor }
}

export default useColors;
 */