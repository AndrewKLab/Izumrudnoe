import * as React from 'react';
import { 
  Text,
  View, 
  StyleSheet,
  StatusBar,
  WebView,
  BackHandler,
  Platform } from 'react-native';
import { Constants } from 'expo';

import ActIndicator from '../screenparts/ActivityIndicator'
import { AntDesign } from '@expo/vector-icons';

export default class BBQScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  static navigationOptions = {
    drawerIcon:({tintColor}) => (
      <AntDesign name='dribbble' style={{fontSize:24, color:tintColor}}/>
      )
    }
  showSpinner() {
    console.log('Show Spinner');
    this.setState({ visible: true });
  }

  hideSpinner() {
    console.log('Hide Spinner');
    this.setState({ visible: false });
  }

  ActivityIndicatorLoadingView() {
   //making a view to show to while loading the webpage
   return (
     <ActIndicator/>
   );
}


webView = {
    canGoBack: false,
    ref: null,
  }

  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }




  render() {
        const {
        color
      } = this.props



    let jsCode = `
                const meta = document.createElement('meta'); 
                meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0');
                meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);

                var appdelete = document.getElementsByClassName('appdelete');
                 for (var i = 0; i < appdelete.length; i++){
                  appdelete[i].style.display='none';
		            }
                var date = document.getElementsByClassName('entry-thumbnail-date');
                 for (var i = 0; i < date.length; i++){
                  date[i].style.display='none';
		            }              
    `;

    return (
      <View style={styles.container}>
      
        <WebView

        ref={(webView) => { this.webView.ref = webView; }}
        onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}

        domStorageEnabled={true}

        startInLoadingState={true}
        renderLoading={this.ActivityIndicatorLoadingView}

        source={{uri: 'http://izumrudnoe.ru/pages/barbekyu/'}}
        injectedJavaScript={jsCode}
        javaScriptEnabledAndroid={true}
        bounces={true}

         onLoadStart={() => this.showSpinner()}
         onLoad={() => this.hideSpinner()}
         useWebKit={false}
        

/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }, 
});