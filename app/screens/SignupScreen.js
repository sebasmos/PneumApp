import React, { Component, useState } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    Button,
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
  // Set picker state     
  const state = {
    opc1: 'E',
    opc2: 'H',
    opc3: 'M',
    opc4: 'ND',
    }
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
                    placeholder={'Correo Electronico'}
                    placeholderTextColor={'rgba(255,255,255,0.7)'}
                    underlineColorAndroid='transparent'
                />
            </View>
           
            <TouchableOpacity>
                <View style={styles.button}>
                    <Picker
                        style={styles.picker}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'>
                        <Picker.Item label="Soy un Paciente" value="Paciente" />
                        <Picker.Item label="Soy un Medico" value="Medico" />
                    </Picker>
                </View>
                
            </TouchableOpacity>                
                <View style={styles.button}>
                        <Picker                    
                            style={styles.picker} itemStyle={styles.inputContainer}
                            selectedValue={state.opc1}
                            onValueChange={(itemValue) => setState({opc1: itemValue})}
                        >
                                <Picker.Item label="Genero" value="E" />
                                <Picker.Item label="Hombre" value="H" />
                                <Picker.Item label="Mujer" value="M" />
                                <Picker.Item label="Otro" value="ND" />
                        </Picker>
                                        
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
};

   
export default SignupScreen;