import React, { Component } from 'react';
import {createAppContainer } from 'react-navigation';
import Navigation from './Navigation';
import Router from './Router';

import { onAuthStateChanged } from '../services/firebase';

const AppNavigator = createAppContainer(Router);

class Navigator extends Component {

  constructor(props) {
    super(props);

    //TODO: login stuff
  }

  componentDidMount() {
    Navigation.setTopLevelNavigator(this.navigator);
    this.onAuthStateChanged = onAuthStateChanged(user => {
      if (user) {
        Navigation.navigate('Dashboard', { user })
      }
    })
  }

  componentWillUnmount() {
    this.onAuthStateChanged && this.onAuthStateChanged();
    this.onAuthStateChanged = undefined;
  }

  render() {
    return (
      <AppNavigator ref={nav => { this.navigator = nav; }} />
    );
  }
}

export default Navigator;
