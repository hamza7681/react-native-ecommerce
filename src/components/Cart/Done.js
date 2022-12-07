import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Done = () => {
  return (
    <View style={styles.mainContainer}>
      <Icon name="smile-o" style={styles.icon} />
      <Text style={styles.text}>
        Congratulations Your Order Has Been Successfully Placed!
      </Text>
    </View>
  );
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height - 430,
  },
  icon: {
    fontSize: 150,
    color: '#CD2047',
  },
  text: {
    color: '#272727',
    fontSize: 23,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Done;
