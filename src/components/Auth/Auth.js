import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Auth = () => {
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
      <View style={styles.descContainer}>
        <Text style={styles.descTitle}>LOREM IPSUM</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis leo
          sapien metus.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.signin}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonTextOne}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonTextTwo}>Register</Text>
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
  descContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 130,
  },
  descTitle: {
    fontSize: 23,
    fontFamily: 'Sansation',
    color: '#4B4B4B',
  },
  desc: {
    color: '#A7A7A7',
    width: width - 70,
    textAlign: 'center',
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
  register: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    width: width - 40,
    borderWidth: 1,
    borderColor: '#7C12A1',
    marginTop: 20,
  },
  buttonTextTwo: {
    color: '#CD2047',
  },
});

export default Auth;
