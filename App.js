import React from 'react';
import { StyleSheet, Text, View, Platform, Alert,Linking } from 'react-native';
import { WebView } from 'react-native';

export default class App extends React.Component {

  navHandler = (navigator) => {
    if (navigator.url.indexOf('https://cfsfiserv.com/QEUATSMT/') === 0) {
        return true;
    } else {
        Alert.alert('Opening in browser');
        this.webview.stopLoading();
        Linking.openURL(navigator.url);
        return false;
    }
  }
  render() {
    return (
      <View style={styles.container} className="app" >
        <WebView
          ref={(ref) => { this.webview = ref; }}
          source={{
            uri: 'https://cfsfiserv.com/QEUATSMT/',
          }}
          style={{marginTop: 35}}
          scalesPageToFit={(Platform.OS === 'ios') ? false : true}
          onNavigationStateChange ={this.navHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d3947',
  },
});
