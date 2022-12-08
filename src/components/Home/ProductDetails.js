import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

const ProductDetails = () => {
  return (
    <ScrollView>
      <Text style={styles.specify}>Specification</Text>
      <Text style={{fontSize: 16}}>Material: ABS + Non-Stick Coat</Text>
      <Text style={{fontSize: 16}}>Voltage: 220V</Text>
      <Text style={{fontSize: 16}}>Power: 350W</Text>
      <Text style={{fontSize: 16}}>Weight: 500g</Text>
      <Text style={styles.feature}>Features</Text>
      <Text>
        1.Non-stick coat, easy to turn over waffle and clean 2.Equipped with
        indicator light which helps you control time 3.Double side heating
        evenly, no worry about over cooked 4.Easy to operate, cooking waffle
        with 2 steps, kids can do it 5.Compact design, make cute size waffle and
        convenient to storage
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  specify: {
    color: '#272727',
    fontSize: 18,
    fontWeight: 'bold',
  },
  feature: {
    color: '#272727',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  
});

export default ProductDetails;
