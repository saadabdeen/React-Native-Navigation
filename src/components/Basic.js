import React from 'react';
import { View, Text, Button  , StyleSheet} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; 


class HomeScreen extends React.Component {
    render (){
        return (
            <View style = {{flex : 1 , alignitems: 'center' , justifyContent : 'center' , backgroundColor: 'hsla(300, 100%, 50%, 0.2)' }}>
            <Text style = {{flex : 1 , textAlign: 'center' , fontWeight: 'bold', fontSize: 35}}> HOME SCREEN </Text>
            <Button  title = "GO TO DETAILS" onPress = {() =>   this.props.navigation .navigate ('Details')} />
            </View>
            
        );
        
    }
}
class Details extends React.Component {
    render (){
        return (
            <View style = {{flex : 1 , alignitems: 'center' , justifyContent : 'center' , backgroundColor: 'hsla(120, 100%, 50%, 0.2)' }}>
            <Text style = {{flex : 1 , textAlign: 'center' , fontWeight: 'bold', fontSize: 35}}> DETAILS PAGE</Text>
            <Button  title = "GO BACK TO HOME" onPress = {() => this.props.navigation.navigate('Home')}/>
            <Button title = "CONTACT US" onPress ={() => this.props.navigation.navigate('Contact')} />
            </View>
        );
    }
}
class ContactUs extends React.Component {
    render() {
        return (
            <View style = {{flex : 1 , alignitems: 'center' , justifyContent : 'center' , backgroundColor: 'hsla(0, 100%, 50%, 0.2)' }}> 
            <Text style = {{flex : 1 , textAlign: 'center' , fontWeight: 'bold', fontSize: 35}}> CONTACT US</Text>
            <Button  title = "GO BACK TO MAIN PAGE" onPress = {() => this.props.navigation.navigate('Home')}/>
            </View>
        );
        
    }
    
}

const RootStack = createStackNavigator (
    {
        Home : HomeScreen ,
        Details : Details ,
        Contact : ContactUs , 
    },
    {
    initialRouteName : 'Home' ,
    }
);
const Wow = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <Wow/>;
  }
}