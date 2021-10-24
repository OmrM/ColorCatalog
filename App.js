import React, {useState} from 'react';
import { FlatList, StyleSheet,View, } from 'react-native';
import ColorButton from './components/ColorButton';
import ColorForm from './components/ColorForm';
import useColors from './hooks/useColors';


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
