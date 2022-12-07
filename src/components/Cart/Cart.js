import React from 'react';
import {View, StyleSheet} from 'react-native';
import StepperComp from './StepperComp';

const Cart = () => {
  return (
    <View style={styles.container}>
      <StepperComp />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    paddingLeft:10,
    paddingRight:10,
    flex:1
  }
});

export default Cart;
