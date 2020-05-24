import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    Button,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from '../navigation/Navigation'; 
import bgImage from '../../assets/bg4.jpg'; 
import Logo from '../../assets/LOGOFINAL.png';
import DateTimePicker from '@react-native-community/datetimepicker';

const { width: WIDTH } = Dimensions.get('window')

const SignupScreen =()=>{
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

    const _onPressPass = ()=> {
        Navigation.goBack()
    };
    const _onPressSignup = () => {
        Navigation.navigate('GettingStarted', { someParam: 1 })
    };

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
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Apellidos'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Cedula'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Correo Electronico'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Genero'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                    <TouchableOpacity style={styles.button} onPress={showDatepicker}>
                        <Icon name={'ios-arrow-dropdown'} size={28} color={'rgba(255,255,255,0.7)'}
                            style={styles.inputIcon}
                        />
                         <Text style={styles.Datetext} > Fecha de nacimiento </Text>
                    </TouchableOpacity>
                
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )}


                <TouchableOpacity style={styles.btnLogin} onPress={_onPressSignup}>
                    <Text style={styles.text} > Registrarme </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAtras} onPress={_onPressPass}>
                    <Text style={styles.text} > Atrás </Text>
                </TouchableOpacity>
            </ImageBackground>
        );
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
        marginBottom:16
    },
    TextWelcome: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 32
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
        width: 265,
        height: 70,
    },
    btnAtras: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginTop: 15
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
    button:{
            width: WIDTH - 55,
            height: 45,
            borderRadius: 45,
            fontSize: 16,
            paddingLeft: 45,
            backgroundColor: 'rgba(0,0,0,0.35)',
            color: 'rgba(255,255,255,0.7)',
            marginHorizontal: 25,
            marginTop:8
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 300
    },
    inputContainer: {
        marginTop: 8,
        marginBottom: 8
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
    Datetext:{
        textAlign: 'left',
        marginTop:8,
        fontSize:16,
        color: 'rgba(255,255,255,0.7)',
    },
    text: {
        color: 'rgba(255,255,255,1)',
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

export default SignupScreen;