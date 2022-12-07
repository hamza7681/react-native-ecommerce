import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Forgot = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.topContainerOne}></View>
        <View style={styles.topContainerTwo}></View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>E-Commerce</Text>
      </View>
      <View style={styles.accountContainer}>
        <Text style={styles.accountHeading}>Forgot Password</Text>
      </View>
      <View style={styles.introContainer}>
        <Text style={styles.intro}>
          We will send a reset code to your email, input that code to renew your
          password.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.inputEmail} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.signin}
          onPress={() => navigation.navigate('Reset')}>
          <Text style={styles.buttonTextOne}>Send</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Back to login</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.registeration}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height,
    flex: 1,
  },
  subContainer: {
    marginTop: 40,
    overflow: 'hidden',
    transform: [{rotate: '-1deg'}],
    height: 97,
    position: 'relative',
  },
  topContainerOne: {
    backgroundColor: '#A8169F',
    height: 50,
    transform: [{rotate: '3deg'}],
    position: 'relative',
    top: -10,
  },
  topContainerTwo: {
    backgroundColor: '#CD2047',
    height: 50,
    marginTop: 7,
    transform: [{rotate: '3deg'}],
  },
  titleContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Sansation',
    color: 'black',
  },
  accountContainer: {
    alignItems: 'center',
    width: width - 185,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 7,
    borderBottomColor: '#272727',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  accountHeading: {
    fontSize: 25,
    color: '#272727',
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  inputEmail: {
    borderWidth: 2,
    borderColor: '#999999',
    width: width - 48,
    paddingLeft: 10,
  },

  forgotContainer: {
    marginTop: 5,
  },
  forgot: {
    paddingLeft: 24,
    color: '#272727',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  signin: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#7C12A1',
    width: width - 40,
  },
  buttonTextOne: {
    color: 'white',
    fontSize: 16,
  },
  registerContainer: {
    alignItems: 'center',
  },
  registerText: {
    color: '#272727',
  },
  registeration: {
    color: '#CD2047',
  },
  introContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  intro: {
    color: '#272727',
    width: width - 48,
    textAlign: 'center',
  },
});

export default Forgot;
