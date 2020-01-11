import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  WebView,
  BackHandler,
  Platform,
  Icon,
} from 'react-native';
import { Constants } from 'expo';

import ActIndicator from './screenparts/ActivityIndicator'
import { AntDesign } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
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
/*
  webView = {
    canGoBack: false,
    ref: null,
  };

  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  };

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener(
        'hardwareBackPress',
        this.onAndroidBackPress
      );
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
    
  }

*/

  render() {
    const { color } = this.props;

    let jsCode = `

                const meta = document.createElement('meta'); 
                meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0');
                meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);
                
                var date = document.getElementsByClassName('entry-thumbnail-date');
                 for (var i = 0; i < date.length; i++){
                  date[i].style.display='none';
		            }
                document.getElementById('responsive-menu-button').style.display='none';
               
                document.getElementById('theme-attribution').style.display='none';
                
                document.getElementById('TA_socialButtonRate304').style.display='none';
                document.getElementById('main-slider').style.display='none';
                document.getElementById('delete').style.display='none';


                document.getElementById('pg-1250-2').style.display='none';
                document.getElementById('pg-1250-3').style.display='none';
                document.getElementById('pg-1250-4').style.display='none';
                document.getElementById('pg-1250-5').style.display='none';
                document.getElementById('pg-1250-8').style.display='none';
                document.getElementById('pg-1250-9').style.display='none';
                document.getElementById('pg-1250-11').style.display='none';

                document.getElementById('nav-below').style.display='none';


    `;
    return (
      <View style={styles.container}>
        <WebView
  /*     
        ref={(webView) => { this.webView.ref = webView; }}
        onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
        onMessage={(event)=> console.log(event.nativeEvent.data)}
*/


          startInLoadingState={true}
          renderLoading={this.ActivityIndicatorLoadingView}
          source={{ uri: 'http://izumrudnoe.ru' }}
          injectedJavaScript={jsCode}
          javaScriptEnabledAndroid={true}
          bounces={true}
          thirdPartyCookiesEnabled={true}

          onLoadStart={() => this.showSpinner()}
          onLoad={() => this.hideSpinner()}
          useWebKit={false}
          geolocationEnabled={true}
          allowsInlineMediaPlayback={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
