import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params = {}) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function reset({route = 'Login'}) {
  _navigator.dispatch(
    NavigationActions.init({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: route })]
    })
  )
}

function goBack(key = null) {
  _navigator.dispatch(
    NavigationActions.back({ key })
  );
}

export default {
  navigate,
  setTopLevelNavigator,
  goBack,
  reset,
};