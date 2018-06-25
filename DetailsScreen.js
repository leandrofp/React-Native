import React from 'react';
import { Text, View, Button  , StyleSheet, FlatList} from 'react-native';
//import { ListItem  } from 'react-native-elements'
import {connect} from 'react-redux';
import {counterIncrement , counterDecrement , fetchPeople} from './Actions/tabnavi.actions' 


class DetailsScreen extends React.Component {

    constructor(){
        super()
        // state = {
        //     users: []
        //   }
    }

    // componentDidMount(){
    //     this.setState({users : this.props.tabnavi.people})
    // }

    render() {

        //BLABLA
        const list = [
            {
              name: 'Amy Farha',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              subtitle: 'Vice President'
            },
            {
              name: 'Chris Jackson',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              subtitle: 'Vice Chairman'
            },
        ]
  
        console.log(this.props.tabnavi.people)
        
        return (
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' , backgroundColor:'tomato' }}>         
                <View style={{marginTop: 35}}>
               
                <Text style={{fontSize:14}}>Contador: {this.props.tabnavi.count1}</Text>            
                </View>
                <View> 
                    <FlatList
                        data={this.props.tabnavi.people}
                        renderItem={({item}) => 
                            <View>
                                <Text style={{fontSize:16}}>    {item.name.first}   </Text>
                                <Text style={{fontSize:16}}>    {item.email}        </Text>
                                <Text style={{fontSize:16}}>    {item.gender}       </Text>
                                
                                
                            </View>
                            }
                    /> 
                </View>  
            </View>
      );
    }
  }

  function mapStateToProps(state){
    return state
  }
  export default connect(mapStateToProps,{counterIncrement, counterDecrement,fetchPeople})(DetailsScreen);