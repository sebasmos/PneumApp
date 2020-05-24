import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

import { getData } from '../services/cloudant'

export default class RealTimeScreen extends Component {
    

    constructor(props) {
        super(props);

        //const someExtractedParam = this.props.navigation.getParam('someParam', 'defaulValue')

        this.state = {
            data: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
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

    render() {
        const data = this.state.data.map(item => item.value);//[50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
        const contentInset = { top: 20, bottom: 20 }

        return (
            <View style={styles.container}>
                <Text>Gotcha!</Text>
                {/* <Text>{JSON.stringify(this.state.data)}</Text> */}
                <View style={{ height: '60%', width: '100%', flexDirection: 'row' }}>
                    <YAxis
                        data={data}
                        contentInset={contentInset}
                        svg={{
                            fill: 'grey',
                            fontSize: 10,
                        }}
                        numberOfTicks={10}
                        formatLabel={(value) => `${value} ppm`}
                    />
                    <LineChart
                        style={{ width: '80%', marginLeft: 16 }}
                        data={data}
                        svg={{ stroke: 'rgb(134, 65, 244)', strokeWidth: 3 }}
                        contentInset={contentInset}
                        curve={shape.curveNatural}
                    >
                        <Grid />
                    </LineChart>
                    {/* <XAxis
                        style={{ marginHorizontal: -10 }}
                        data={data}
                        formatLabel={(value, index) => index}
                        contentInset={{ left: 10, right: 10 }}
                        svg={{ fontSize: 10, fill: 'black' }}
                    /> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})