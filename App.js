import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, Dimensions, SafeAreaView, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { Constants } from 'expo';
import {
  createDrawerNavigator,
  createStackNavigator,
  DrawerActions, 
  DrawerItems,
} from 'react-navigation';

import { Appbar } from 'react-native-paper';

import { AntDesign } from '@expo/vector-icons';
import MenuDrawer from './components/MenuDrawer';
import RNIconic from 'react-native-iconic'

//Main memu
import HomeScreen from './screens/HomeScreen'
import FeedScreen from './screens/FeedScreen'
import InfoScreen from './screens/InfoScreen'
import HotelScreen from './screens/HotelScreen'
import RestouranScreen from './screens/RestouranScreen'
//Contact
import ContactScreen from './screens/ContactScreen'

//Health
import BaniScreen from './screens/health/BaniScreen'
import SPAScreen from './screens/health/SPAScreen'
import JIMScreen from './screens/health/JIMScreen'
import FOKScreen from './screens/health/FOKScreen'
import OKScreen from './screens/health/OKScreen'


//Entertainment 
import ProkatScreen from './screens/entertainment/ProkatScreen'
import PoolScreen from './screens/entertainment/PoolScreen'
import BBQScreen from './screens/entertainment/BBQScreen'
import ChildScreen from './screens/entertainment/ChildScreen'

//DrawerNavigation
const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
  drawerWidth: WIDTH*0.83,
  contentComponent: ({navigation}) => {
    return(<MenuDrawer navigation={navigation} />)
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1, height: 130, backgroundColor: 'litegray',}}>
  <ScrollView>
    <View style={{height: 150, backgroundColor: 'green'}}>
        <Image source={require ('./assets/headerbg.jpg')} style={{resizeMode: 'repeat', width: '100%', height: '100%'}} />
        <Image source={require ('./assets/logo-small.png')} style={{resizeMode: 'contain', position: 'absolute', width: '100%', height: '100%'}} />
   </View>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
);

const InnerDrawer = createDrawerNavigator(
  {
    Home: {
        screen: HomeScreen,
         navigationOptions: {
          title: 'Главная',
          drawerIcon:({tintColor}) => (
          <AntDesign name='home' style={{fontSize:24, color:tintColor}}/>
        )
      },
    },

    Feed: {
      screen: FeedScreen,
        navigationOptions: {
          title: 'Новости',
          drawerIcon:({tintColor}) => (
          <AntDesign name='notification' style={{fontSize:24, color:tintColor}}/>
          )
      },
    },  

    Info: {
      screen: InfoScreen,
        navigationOptions: {
          title: 'О НАС',
          drawerIcon:({tintColor}) => (
          <AntDesign name='infocirlceo' style={{fontSize:24, color:tintColor}}/>
        )
      },
    },
    Hotel: {
      screen: HotelScreen,
       navigationOptions: {
        title: 'Номера',
        drawerIcon:({tintColor}) => (
        <AntDesign name='tagso' style={{fontSize:24, color:tintColor}}/>
        )
      },
    },
    
    Restouran: {
      screen: RestouranScreen,
        navigationOptions: {
          title: 'Рестораны',
          drawerIcon:({tintColor}) => (
          <AntDesign name='rest' style={{fontSize:24, color:tintColor}}/>
        )
      },
    },
//Health
          Bani: {
      screen: BaniScreen,
     },
          SPA: {
      screen: SPAScreen,
     },
          JIM: {
      screen: JIMScreen,
     },
          FOK: {
      screen: FOKScreen,
     },
          OK: {
      screen: OKScreen,
     },

//Entertainment 
           Prokat: {
      screen: ProkatScreen,
      },
           Pool: {
      screen: PoolScreen,
      },
           BBQ: {
      screen: BBQScreen,
      },
           Child: {
      screen: ChildScreen,
      },

    Contact: {
      screen: ContactScreen,
        navigationOptions: {
          title: 'Контакты',
          drawerIcon:({tintColor}) => (
          <AntDesign name='phone' style={{fontSize:24, color:tintColor}}/>
       )
     },
    },
  },
  {
    getCustomActionCreators: (route, stateKey) => {
      console.log('inner: ' + stateKey);
      return {
        toggleInnerDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }),
        
      };
    },

contentComponent: props => (
<MenuDrawer {...props} />
),
contentOptions:{
   activeTintColor:'green',
}
},
);



const StackNav = createStackNavigator({
   
  drawerLeft: {
    screen: InnerDrawer,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Appbar.Header style={styles.appbar} statusBarHeight={14} >        
        <Appbar.Action icon="menu" onPress={navigation.toggleInnerDrawer} size={32} />
        <Appbar.Content title="База отдыха «Изумрудное»"  />

        </Appbar.Header>        
      ),
    }),
  },
});


export default class App extends Component {
  

  render() {
    return <StackNav />;
  }
}

const styles = StyleSheet.create({

    appbar: {
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: '#025c2b',

    },

  
});
