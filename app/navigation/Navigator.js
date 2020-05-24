import React, { Component } from 'react';
import {createAppContainer } from 'react-navigation';
import Navigation from './Navigation';
import Router from './Router';

const AppNavigator = createAppContainer(Router);

class Navigator extends Component {

  constructor(props) {
    super(props);

    //TODO: login stuff
  }

  componentDidMount() {
    Navigation.setTopLevelNavigator(this.navigator);
  }

  componentWillUnmount() {
    //TODO: unsubscribe any data observer
  }

  render() {
    return (
      <AppNavigator ref={nav => { this.navigator = nav; }} />
    );
  }
}

export default Navigator;
