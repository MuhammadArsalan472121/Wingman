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

const Discover = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('./assets/backArrow.png')} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit Profile</Text>
        </View>

        <View style={styles.imageIcon}>
          <Image source={require('./assets/profileIcon.png')} />
        </View>

        <View style={styles.fields}>
          <Text style={styles.textStyle}>Name</Text>
          <TextInput style={styles.textInputStyle}>Jhon Deo</TextInput>

          <Text style={styles.textStyle}>Email</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="user@gmail.com"
            placeholderTextColor="#ffff"
          />

          <Text style={styles.textStyle}>Date of Birth</Text>
          <TextInput style={styles.textInputStyle}>01-01-1999</TextInput>

          <Text style={styles.textStyle}>About me</Text>
          <TextInput style={styles.textInputStyleAboutMe} multiline={true}>
            I like video games but I don't have time to play. Real like
            travelling and crafted beer. I have 3 Cats so... be nice for them.
          </TextInput>
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
  header: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  imageIcon: {
    flex: 0.2,
    height: 'auto',
    width: '100%',
    paddingLeft: 100,
  },
  fields: {
    flex: 0.6,
    padding: 10,
  },
  textStyle: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textInputStyle: {
    height: 40,
    color: '#ffff',
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#ffff',
  },
  textInputStyleAboutMe: {
    height: 40,
    color: '#ffff',
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    height: 'auto',
    borderColor: '#ffff',
  },
});

export default Discover;
