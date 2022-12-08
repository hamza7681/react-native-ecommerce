import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import pic from '../../assets/pic.jpeg';
import { useNavigation } from '@react-navigation/native';

const ProductList = () => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => navigation.navigate('Single_Product')}>
      <Image source={pic} style={styles.pic} />
      <Text style={styles.name}>Product Name</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>$100</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pic: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  productContainer: {
    margin: 6,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#272727',
    paddingLeft: 10,
    marginBottom: 10,
  },
  icon: {
    color: '#272727',
  },
});

export default ProductList;
