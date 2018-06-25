import React from 'react';
import { Text, View, Button  , StyleSheet, FlatList} from 'react-native';
import { ListItem  } from 'react-native-elements'
import {connect} from 'react-redux';
import {counterIncrement , counterDecrement , fetchPeople} from './Actions/tabnavi.actions' 


class DetailsScreen extends React.Component {

    constructor(){
        super()
 
    }

    render() {

        //console.log(this.props.tabnavi.people)
        
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor:'yellow'}}>     
                {/*alignItems: 'center'  NO ANDA!!!!!*/}    
                <View style={{marginTop: 45}}>
                <Text style={{fontSize:14}}>Contador: {this.props.tabnavi.count1}</Text>            
                </View>
                <View> 
                 
                    <FlatList
                        ListHeaderComponent={<Text>Inicio Pagina</Text>}
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
                        }
                        ListFooterComponent={<Text style={{marginBottom:45}}>Fin de Pagina</Text>}
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