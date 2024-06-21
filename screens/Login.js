import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={styles.logo}>
          <Image source={require('../assets/logo.png')} />
        </View>

        <View style={styles.login}>
          <Text style={{fontSize: 40, color: '#ffff', textAlign: 'center'}}>
            LOGIN
          </Text>
        </View>

        <View style={styles.fields}>
          <Text style={styles.textStyle}>EMAIL ADDRESS</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="name.lastname@test.com"
            placeholderTextColor="#ffff"></TextInput>
          <View style={styles.fieldsView}>
            <Text style={styles.textStyle}>PASSWORD</Text>
            <TouchableOpacity>
              <Text style={styles.textStyle}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.textInputStyle}
            secureTextEntry={true}
            color="#ffff"></TextInput>
        </View>

        <View style={styles.loginButton}>
          <View style={{flexDirection: 'column', alignContent: 'center'}}>
            <TouchableOpacity>
              <Text style={styles.buttonTextStyle}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.signupTextStyle}>
                Don't have an Account? Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EAEE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 0.3,
    backgroundColor: '#ffff',
    padding: 20,
    alignItems: 'center',
    borderBottomStartRadius: 70,
    borderBottomEndRadius: 70,
  },
  login: {
    flex: 0.1,
    justifyContent: 'center',
    padding: 10,
  },
  fields: {
    flex: 0.4,
    width: '100%',
    padding: '5%',
  },
  textInputStyle: {
    height: 40,
    color: '#ffff',
    borderBottomWidth: 1,
    borderColor: '#ffff',
  },
  fieldsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#ffff',
  },
  loginButton: {
    flex: 0.2,
    width: '100%',
    padding: 20,
  },
  buttonTextStyle: {
    backgroundColor: '#ffff',
    color: '#3EAEE4',
    paddingTop: 10,
    textAlign: 'center',
    borderRadius: 50,
    height: 50,
    fontSize: 20,
  },
  signupTextStyle: {
    textAlign: 'center',
    paddingTop: 15,
    color: '#ffff',
    fontWeight: 'bold',
  },
});
export default Login;
