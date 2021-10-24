import React, {useState} from 'react';
import { FlatList, StyleSheet,View, } from 'react-native';
import {generate} from 'shortid';
import ColorButton from './components/ColorButton';
import ColorForm from './components/ColorForm';
import defaultColors from './data/defaultColors.json';


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


export default function App() {
  //initial state for background color
  const [backgroundColor, setBackgroundColor] = useState("blue")
  //list of colors and the function to add colors - from the useColors hook
  const { colors, addColor } = useColors();

  return (
    <>

    <ColorForm onNewColor = {addColor}/>

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

    </>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',

  },
});
