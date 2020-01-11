import * as React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ImageBackground
} from 'react-native';


export default class ActivityIndicatorLoadingView extends React.Component {
    render() {
  
    return (
      <View >
      <ImageBackground  source={require('./mobileapp.jpg')} style={{width: '100%', height: '100%',}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <View style={{
        height: 100,
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderRadius: 7, }}>
      <ActivityIndicator size="large" color="#009133" style={{marginTop: 10,}} />
      <Text style={{marginTop: 18,  fontSize: 18, color:'#fff',}} >Загружаем информацию</Text>
      </View>
      </View>
     </ImageBackground>
      </View>
    );
  }
}
