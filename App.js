import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={styles.imageView}>
          <Image source={require('./assets/logo.png')} />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttonViewStyle}>
            <Text style={styles.textStyle}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonViewStyle}>
            <Text style={styles.textStyle}>Discover</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EAEE4',

  },
  imageView: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    borderBottomRightRadius:80,
    borderBottomLeftRadius:80,
  },

  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:250,
  },
  buttonViewStyle: {
    height: 50,
    width:150,
    backgroundColor: '#fff',
    borderRadius:30,
    justifyContent: 'center',
    alignItems:'center',
  },
  textStyle:{
    color:'#3EAEE4',
    fontWeight:'bold',
    fontSize:20,
  }
});

export default App;
