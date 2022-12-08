import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import pic from '../../assets/pic.jpeg';
import Comments from './Comments';
import ProductDetails from './ProductDetails';

const SingleProduct = () => {
  const [vars, setVars] = useState(0);
  const [swap, setSwap] = useState(true);
  let colors = ['red', 'purple', 'green'];
  return (
    <View style={styles.main}>
      <Image source={pic} style={styles.pic} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>Product Name</Text>
          <Text style={styles.desc}>
            Gucci Bag with gold platted chain for your luxurious travels.
          </Text>
        </View>
        <View style={styles.variationContainer}>
          <View style={styles.variationContainer}>
            {colors.map((val, index) => {
              return (
                <View style={vars == index ? styles.varBorder : ''}>
                  <TouchableOpacity
                    style={[{backgroundColor: val}, styles.var]}
                    onPress={() => setVars(index)}></TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$400</Text>
          <View style={styles.counter}>
            <TouchableOpacity>
              <Text style={styles.op}>-</Text>
            </TouchableOpacity>
            <Text style={styles.op}>2</Text>
            <TouchableOpacity>
              <Text style={styles.op}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tabs}>
          <View style={styles.tabBars}>
            <TouchableOpacity onPress={() => setSwap(true)}>
              <Text style={swap ? styles.label : styles.inactive}>
                Product Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSwap(false)}>
              <Text style={swap ? styles.inactive : styles.label}>
                Comments
              </Text>
            </TouchableOpacity>
          </View>
          {swap ? <ProductDetails /> : <Comments />}
        </View>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  pic: {
    width: width,
    height: 300,
  },
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    padding: 15,
    position: 'relative',
    top: -100,
  },
  header: {
    marginTop: 18,
  },
  name: {
    color: '#272727',
    fontSize: 23,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 17,
    marginTop: 10,
    marginBottom: 10,
  },
  variationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  varBorder: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  var: {
    height: 30,
    width: 30,
    margin: 5,
    borderRadius: 25,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 130,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#7C12A1',
  },
  op: {
    fontSize: 23,
    color: '#7C12A1',
  },
  price: {
    fontSize: 24,
    color: '#CD2047',
    fontWeight: 'bold',
  },
  tabs: {
    marginTop: 20,
    alignItems: 'center',
  },
  tabBars: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  label: {
    color: '#7C12A1',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 20,
    borderBottomColor: '#999999',
    borderBottomWidth: 1,
  },
  inactive: {
    color: '#999999',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 20,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
  },
});

export default SingleProduct;
