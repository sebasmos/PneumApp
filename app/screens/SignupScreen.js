import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    Dimensions,
    Picker,
    TouchableOpacity
} from 'react-native';
import { styles } from '../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';

import Navigation from '../navigation/Navigation'; 
import bgImage from '../../assets/bg4.jpg';
import Logo from '../../assets/LOGOFINAL.png';

const { width: WIDTH } = Dimensions.get('window')

export default class SignupScreen extends Component {

    constructor(props) {
        super(props);
        //const someExtractedParam = this.propss.navigation.getParam('someParam', 'defaulValue')
    }

    _onPressSignup = () => {
        Navigation.navigate('GettingStarted', { someParam: 1 })
    }

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.Logo} ></Image>
                </View>
                <View style={styles.TextWelcome} >
                    <Text style={styles.WelcomeText} >Registrate </Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Nombres'}
                        placeholderTextColor={'rgba(0,0,0,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Apellidos'}
                        placeholderTextColor={'rgba(0,0,0,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Correo Electronico'}
                        placeholderTextColor={'rgba(0,0,0,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Genero'}
                        placeholderTextColor={'rgba(0,0,0,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Picker
                        style={styles.input}
                        placeholderTextColor={'rgba(0,0,0,0.7)'}
                        underlineColorAndroid='transparent'>
                        <Picker.Item label="Soy un Paciente" value="Paciente" />
                        <Picker.Item label="Soy un Medico" value="Medico" />
                    </Picker>
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={this._onPressSignup}>
                    <Text style={styles.text} > Registrarme </Text>
                </TouchableOpacity>

            </ImageBackground>
        );
    }
}

