import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import pic from '../../assets/pic.jpeg';

const ItemsDetails = () => {
  const testItems = [
    {
      pic: pic,
      title: 'Title 1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      qty: 2,
      color: 'black',
      price: 200,
    },
    {
      pic: pic,
      title: 'Title 2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
      qty: 3,
      color: 'purple',
      price: 300,
    },
  ];

  return (
    <View>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        {testItems.map((val, index) => {
          return (
            <>
              <View key={index} style={styles.container}>
                <View style={styles.upperContainer}>
                  <Image source={val.pic} style={styles.pic} />
                  <View>
                    <Text style={styles.title}>{val.title}</Text>
                    <Text style={styles.desc}>{val.desc}</Text>
                  </View>
                </View>
                <View style={styles.lowerContainer}>
                  <View style={styles.counter}>
                    <TouchableOpacity>
                      <Text style={styles.op}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.op}>{val.qty}</Text>
                    <TouchableOpacity>
                      <Text style={styles.op}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.variations}>
                    <View
                      style={[
                        {backgroundColor: val.color},
                        styles.circle,
                      ]}></View>
                  </View>
                  <View>
                    <Text style={styles.price}>${val.price}</Text>
                  </View>
                </View>
              </View>
            </>
          );
        })}
        <View style={styles.line}></View>
        <View style={styles.calcutions}>
          <Text style={styles.calc}>
            Shipping Fee: <Text style={styles.fee}>$100</Text>
          </Text>
          <Text style={styles.calc}>
            Total: <Text style={styles.fee}>$700</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 3,
  },
  container: {
    backgroundColor: 'white',
    marginTop: 20,
  },
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pic: {
    width: 130,
    height: 130,
  },
  title: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  desc: {
    color: 'black',
    width: 190,
  },
  lowerContainer: {
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
  variations: {
    width: 100,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 400 / 2,
  },
  price: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#272727',
  },
  line: {
    backgroundColor: '#999999',
    height: 2,
    marginTop: 30,
  },
  calcutions: {
    alignItems: 'flex-end',
    marginBottom: 15,
    marginTop: 15,
  },
  calc: {
    color: '#999999',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
  },
  fee: {
    color: '#272727',
    fontWeight: 'bold',
  },
});

export default ItemsDetails;
