import React, { Component } from 'react';
import { Text, View, Button, FlatList } from 'react-native';

import { styles } from '../styles/styles';
import { getData } from '../services/cloudant';
import Navigation from '../navigation/Navigation';
import { signOut } from '../services/firebase'

export default class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Dashboard'
    };

    constructor(props) {
        super(props);

        //Ejemplo
        const user = this.props.navigation.getParam('user', null)
        alert(JSON.stringify(user)) // USE

        this.state = {
            GridListItems: [
                { key: "Mi perfil" },
                { key: "Ver Señales" },
                { key: "Predicción COVID-19" },
                { key: "Chatbot" },
                { key: "Opcion 1" },
                { key: "Opcion 2" },
            ]
        };
    }

    componentDidMount() {
        this.dataInterval = setInterval(() => getData()
            .then(data => this.setState({ data: data.docs || this.state.data }))
            .catch((err) => console.error(err))
            , 500)
    }

    componentWillUnmount() {
        clearInterval(this.dataInterval);
    }

    _onPressLogout = () => {
        signOut()
            .then(() => alert('Has cerrado sesión'))
            .catch(error => console.error(error))
    }

    GetGridViewItem(item) {
        if (item == 'Ver Señales') {
            // onPress={_onPressRealTime}
            Navigation.navigate('RealTime', { someParam: 1 })
        }
        else {
            Alert.alert(item);
        }
    }

    render() {
        return (
            <View style={styles.containerPrincipal}>
                <FlatList
                    data={this.state.GridListItems}
                    renderItem={({ item }) =>
                        <View style={styles.GridViewContainer}>
                            <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
                        </View>}
                    numColumns={2}
                />
                <Button onPress={this._onPressLogout} title={'Cerrar sesión'} />
            </View>
        )
    }
}
