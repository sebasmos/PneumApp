import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import bgImage from '../../assets/bg4.jpg';
import Logo from '../../assets/LOGOFINAL.png';
import Navigation from '../navigation/Navigation';

import { signInWithEmail } from '../services/firebase';

const { width: WIDTH } = Dimensions.get('window')

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    _onPressLogin = () => {
        Navigation.navigate('Signup', { someParam: 1 })

        const { email, password } = this.state;
        signInWithEmail(email, password)
            .then(user => alert(user))
            .catch(error => console.log(error))
    }

    _onChangeEmail = (value) => {
        this.setState({ email: value })
    }

    _onChangePassword = (value) => {
        this.setState({ password: value })
    }

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.TextWelcome} >
                    <Text style={styles.WelcomeText} >Bienvenido a </Text>
                </View>
                <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.Logo} ></Image>
                    <Text style={styles.logoText}> Aplicacion de moasdasdsanitoreo para ventiladores mecanicos</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'ios-arrow-dropright'} size={28} color={'rgba(255,255,255,0.7)'}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Correo'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={this._onChangeEmail}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'ios-arrow-dropright'} size={28} color={'rgba(255,255,255,0.7)'}
                        style={styles.inputIcon}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder={'Contraseña'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={this._onChangePassword}
                    />
                    <TouchableOpacity style={styles.btnEye}>
                        <Icon name={'ios-cloud'} size={26} color={'rgba(255,255,255,0.7)'}
                        />
                    </TouchableOpacity>
                </View>
                <View >
                    <Text style={styles.textforgot}>Olvidaste tu clave?</Text>
                </View>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.text} > Entrar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ContainerHighlighted} onPress={this._onPressLogin}>
                    <Text style={styles.textRegister}>Crea una nueva cuenta</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    TextWelcome: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    WelcomeText: {
        color: '#001696',
        fontSize: 35,
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        fontWeight: '500',
        marginTop: 5,
    },
    Logo: {
        width: 330,
        height: 90,
    },
    logoText: {
        color: '#001696',
        fontSize: 25,
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        fontWeight: '500',
        marginTop: 10,
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,

    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37
    },
    inputContainer: {
        marginTop: 10,
    },
    btnEye: {
        position: 'absolute',
        top: 3,
        right: 37
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        justifyContent: 'center',
        backgroundColor: '#001696',
        marginTop: 50
    },
    text: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center'
    },
    textforgot: {
        color: '#001696',
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    textRegister: {
        fontWeight: 'bold',
        color: '#001696',
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
})
