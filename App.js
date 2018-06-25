import React from 'react';
import { createBottomTabNavigator , createStackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { tabnavi } from './Reducers/tabnavi.reducer'
import { combineReducers } from 'redux';
import PostHomeScreen from './PostHomeScreen'




const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    PostHome: PostHomeScreen,

    navigationOptions: ({navigation}) => ({
      header: null
    }), 
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'     //anula el header del stack raiz que es el login y resto de la app(deberia volver para atras con algun boton)
  },

  );

  
export default class App extends React.Component {  
  
  render() {

    const appReducer = combineReducers({
      tabnavi
    });
    
    const createStoreWithMidddleware = applyMiddleware(thunk)(createStore);
    const store = createStoreWithMidddleware(appReducer);


    return( <Provider store={store}>
      {/* <View> */}
        <RootStack/>
      {/* </View> */}
  </Provider>);
  }
}

