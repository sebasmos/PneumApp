
import React from 'react';
import { View, Text, Image, TextInput, Picker, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { data } from './components/data/data'
import { styles } from './styles'

export default class App extends React.Component {

  _renderItem = ({ item }) => {
    
    return (

      <View
        style={[
          styles.slide
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>

        <View style={{backgroundColor:"#31372F", opacity:0.7}}>
        {item.options.map(option =>

          <View style={{ flex: 1, flexDirection: 'row', alignContent: 'stretch', margin: 20 }}>
            <Text style={[styles.text], { width: 80, color: 'white' }}>{option.type}</Text>
            <Picker
              style={{ height: 30, width: 200 }}
            >
            {option.selectors.map(selector =>
              <Picker.Item style={{ fontSize: 10 }} label={selector} />)}
            </Picker>
          </View>
        )}

        {item.inputs.map(input=> 
          <View style={{ flex: 1, flexDirection: 'row', alignContent: 'stretch', margin: 10 }}>
         
          <TextInput
          style={{height: 25,padding:10, fontSize:15, color:'white',borderWidth:3, borderColor:'#fff', width:300}}
          placeholder={input}
          placeholderTextColor="white"
          selectionColor="white"
          
        />
        </View>
          )}
          </View>

      </View>
    );
  };

  _keyExtractor = (item) => item.title;

  render() {
    return (
      
      <ImageBackground source={require('./assets/bg4.PNG')} style={styles.imagebg}>
      <AppIntroSlider
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        data={data}
      />
      </ImageBackground>
    );
  }
}