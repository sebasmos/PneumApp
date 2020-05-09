import React, { Component, useState } from 'react';
import Navigator from './navigation/Navigator';
import * as Font from 'expo-font';
import  {AppLoading} from 'expo';


const getFonts = () => Font.loadAsync({
    'tipo_letra':require('../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf'),
     'tipo2_letra':require('../assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf')
  });

export default function Main(){
    const[fontsLoaded, setFontsLoaded] = useState(false);

    if(fontsLoaded){
      return(
        <Navigator>
        </Navigator>
      );
    }else{
     return (
      <AppLoading
      startAsync={getFonts}
      onFinish={()=>setFontsLoaded(true)}
    />
     )
    }
}
