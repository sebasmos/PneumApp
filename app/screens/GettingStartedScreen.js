import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, Picker, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Navigation from '../navigation/Navigation';
import { data } from '../constants/data'
import { styles } from '../styles/styles'

export default class GettingStartedScreen extends Component {
    static navigationOptions = {
        title: 'Getting Started'
    };

    constructor(props) {
        super(props);

        //const someExtractedParam = this.props.navigation.getParam('someParam', 'defaulValue')
    }

    _onPressDone = () => {
        Navigation.navigate('Dashboard', { someParam: 1 })
    }
    

    _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>

                <View style={{ backgroundColor: "#31372F", opacity: 0.7 }}>
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
                    {item.inputs.map(input =>
                        <View style={{ flex: 1, flexDirection: 'row', alignContent: 'stretch', margin: 10 }}>
                            <TextInput
                                style={{ height: 25, padding: 10, fontSize: 15, color: 'white', borderWidth: 3, borderColor: '#fff', width: 300 }}
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
            <ImageBackground source={require('../../assets/bg4.jpg')} style={styles.imagebg}>
                <View style={styles.title} >
                    <Text style={styles.WelcomeText} >Datos adicionales </Text>
                </View>
                <View style={styles.descriptionContainer} >
                    <Text style={styles.descripcionTexto} >Ingrese los siguientes campos para completar su registro</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Cedula'}
                        placeholderTextColor={'rgba(0,0,0,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Picker
                        style={styles.input}
                        placeholderTextColor={'rgba(255,255,255,0.9)'}
                        underlineColorAndroid='transparent'>
                        <Picker.Item label="Nacionalidad" value="" />
                        <Picker.Item label="Colombiano" value="Colombiano"/>
                        <Picker.Item label="Mexicano" value="Mexicano"/>
                        <Picker.Item label="Argentino" value="Argentino"/>
                    </Picker>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Dirección'}
                        placeholderTextColor={'rgba(0,0,0,0.7)'}
                        underlineColorAndroid='transparent'/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Peso'}
                        placeholderTextColor={'rgba(0,0,0,0.7)'}
                        underlineColorAndroid='transparent'/>
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={this._onPressDone}>
                    <Text style={styles.text}> Guardar </Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
    
}

