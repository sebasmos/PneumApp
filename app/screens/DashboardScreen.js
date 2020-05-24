import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { styles } from '../styles/styles';
import { getData } from '../services/cloudant'

export default class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Dashboard'
    };

    constructor(props) {
        super(props);

        //const someExtractedParam = this.props.navigation.getParam('someParam', 'defaulValue')

        /*this.state = {
            data: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
        };*/
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

    GetGridViewItem(item) {
        Alert.alert(item);
    }

    render() {
        //const data = this.state.data.map(item => item.value);//[50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
        //const contentInset = { top: 20, bottom: 20 }

        return (
            <View style={styles.containerPrincipal}>
                <FlatList
                    data={ this.state.GridListItems }
                    renderItem={ ({item}) =>
                        <View style={styles.GridViewContainer}>
                        <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
                        </View> }
                    numColumns={2}
                    />
            </View>
        )
    }
}
