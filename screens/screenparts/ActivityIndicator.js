import * as React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Image, Animated, Easing
} from 'react-native';


export default class ActivityIndicatorLoadingView extends React.Component {

constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
}
componentDidMount () {
  this.animate()
}
animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }
  ).start(() => this.animate())
}

    render() {
  const rotateY = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['180deg', '0deg', '0deg']
  })
      

    return (
      
            
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
      <Animated.View
        style={{
          transform: [{rotateY}],
          backgroundColor: '#fff'}}>
        <Image source={require('./icon.png')} style={{width: 100, height: 100,}}/>
      </Animated.View>
      </View>
    );
  }
}
