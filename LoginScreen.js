import React from 'react';
import { Text, View, Button , StyleSheet, TextInput, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator , createStackNavigator} from 'react-navigation';
import {connect} from 'react-redux';
import {counterIncrement , counterDecrement , fetchPeople} from './Actions/tabnavi.actions' 
import PostHomeScreen from './PostHomeScreen'


class LoginScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = { User: '' , password:'' };
    }
    
    componentDidMount(){
      if (this.props.tabnavi.isFetching===false) {
        this.props.fetchPeople()} else {alert("no se puede todavia") };
    }

    validateLogin(){
      if(this.state.password != '' || this.state.User != '')
        this.props.navigation.navigate('PostHome');
      else{
        Alert.alert("Debe ingresar usuario y contraseña")
      }
    }
    
    render() {
      
    
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor:'green'}}>
          <View>
            <Text>Usuario</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width:240}}
              onChangeText={(User) => this.setState({User})}
              placeholder={"User"}
              value={this.state.User}
              underlineColorAndroid='transparent'       /* only android */
            />
          </View>
          <View>
            <Text>Contraseña</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, width:240}}
              onChangeText={(password) => this.setState({password})}
              placeholder={"Password"}
              value={this.state.password}
              underlineColorAndroid='transparent'        /* only android */
            />
          </View>
          <View style={{alignItems:'baseline'}}>
          <Button
            color='red'
            title="Go to Home"
            onPress={() => this.validateLogin()}
          />
          </View>
      </View>
      );
    }
  }
  
function mapStateToProps(state){
  return state
}
export default connect(mapStateToProps,{counterIncrement, counterDecrement,fetchPeople})(LoginScreen);