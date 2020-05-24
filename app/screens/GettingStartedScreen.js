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
            <View
                style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} style={styles.image} />
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
                <AppIntroSlider
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    data={data}
                    onDone={this._onPressDone}
                />
            </ImageBackground>
        );
    }
}

