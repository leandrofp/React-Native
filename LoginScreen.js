import React from 'react';
import { Text, View, Button , StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator , createStackNavigator} from 'react-navigation';
import {connect} from 'react-redux';
import {counterIncrement , counterDecrement , fetchPeople} from './Actions/tabnavi.actions' 
import PostHomeScreen from './PostHomeScreen'


class LoginScreen extends React.Component {

    constructor() {
      super()

    }
    
    componentDidMount(){
      if (this.props.tabnavi.isFetching===false) {
        this.props.fetchPeople()} else {alert("no se puede todavia") };
    }
    
    render() {
      
    
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Pantalla de Login a Futuro</Text>
          <Text>Contador: {this.props.tabnavi.count1}</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('PostHome')}
          />
        </View>
      );
    }
  }
  
function mapStateToProps(state){
  return state
}
export default connect(mapStateToProps,{counterIncrement, counterDecrement,fetchPeople})(LoginScreen);