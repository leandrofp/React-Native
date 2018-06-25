import React from 'react';
import { Text, View, Button  , StyleSheet, FlatList} from 'react-native';
import { ListItem  } from 'react-native-elements'
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


        // const list = [
        //     {
        //       name: 'Amy Farha',
        //       subtitle: 'Vice President'
        //     },
        //     {
        //       name: 'Chris Jackson',
        //       subtitle: 'Vice Chairman'
        //     },
        //   ]
        //   return(
        //   <View>
        //     {
        //       list.map((l, i) => (
        //         <ListItem
        //           key={i}
        //           title={l.name}
        //           subtitle={l.subtitle}
        //         />
        //       ))
        //     }
        //   </View>
        // );
      
        const list = [
            {
              name: 'Amy Farha',
              subtitle: 'Vice President'
            },
            {
              name: 'Chris Jackson',
              subtitle: 'Vice Chairman'
            },
        ]
  
        //console.log(this.props.tabnavi.people)
        
        return (
            <View style={{ flex: 1, justifyContent: 'center', /*alignItems: 'center' ,*/ backgroundColor:'yellow'}}>         
                <View style={{marginTop: 45}}>
                <Text style={{fontSize:14}}>Contador: {this.props.tabnavi.count1}</Text>            
                </View>
                <View> 
                 
                    <FlatList
                        data={this.props.tabnavi.people}
                        renderItem={({item}) =>         
                            (
                                this.props.tabnavi.people.map((item, i) => 
                                    <ListItem
                                    key={i}
                                    title={item.name.first}
                                    subtitle={item.email}
                                    />
                                )
                            )
                  
                            }  /> 
              
                </View>  
            </View>
      );
    }
  }



  function mapStateToProps(state){
    return state
  }
  export default connect(mapStateToProps,{counterIncrement, counterDecrement,fetchPeople})(DetailsScreen);