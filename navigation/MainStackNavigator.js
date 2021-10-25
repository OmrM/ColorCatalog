
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName = "Color Catalog" screenOptions={({}) => ({ 
            headerStyle: { backgroundColor: '#404040',},headerTintColor: 'white' ,headerTitleStyle:{fontWeight: 'bold',fontSize:24},
            headerTitleAlign:'center',headerTitleContainerStyle:{paddingLeft:0},
            })}>
            <Stack.Screen name = "Color Catalog" component = {HomeScreen} />
        </Stack.Navigator>
    )
}

export default MainStackNavigator;