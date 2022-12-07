import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import pic from '../../assets/pic.jpeg';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlaceOrder = () => {
  const [active, setActive] = useState(0);
  const [check, setCheck] = useState(0);
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

  const shipOptions = [
    {
      price: 600,
      source: 'Sea',
      date: 'Arrive in US: 17/12/19',
    },
    {
      price: 600,
      source: 'Economy Air',
      date: 'Arrive in US: 17/12/19',
    },
  ];
  const deliveryOption = [
    {
      method: 'Online Payment',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      icon: 'check',
    },
    {
      method: 'Cash on Delivery',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      icon: 'check',
    },
  ];
  return (
    <View>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View>
          <Text style={styles.home}>Home Delivery</Text>
          <TextInput
            placeholder="Please Select your Home Address"
            style={styles.input}
          />
        </View>
        <View style={styles.itemCount}>
          <Text style={styles.CN}>CN</Text>
          <Text style={styles.count}>1 Item | 1.98kg</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.cartContainer}>
          {testItems.map((val, index) => {
            return (
              <>
                <View key={index} style={styles.cartItems}>
                  <Image style={styles.pic} source={val.pic} />
                  <View>
                    <Text style={styles.title}>{val.title}</Text>
                    <Text style={styles.desc}>{val.desc}</Text>
                    <View style={styles.variationContainer}>
                      <View
                        style={[
                          {backgroundColor: val.color},
                          styles.circle,
                        ]}></View>
                      <View>
                        <Text style={styles.price}>$ {val.price}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </>
            );
          })}
        </View>
        <View style={styles.line}></View>
        <View>
          <Text style={styles.international}>Internation Shipping</Text>
          <View style={styles.selection}>
            {shipOptions.map((val, index) => {
              return (
                <>
                  <TouchableOpacity
                    style={
                      index == active ? styles.activeSelect : styles.select
                    }
                    onPress={() => setActive(index)}>
                    <Text
                      style={
                        index == active
                          ? styles.activeSelectText
                          : styles.selectText
                      }>
                      ${val.price}
                    </Text>
                    <Text
                      style={
                        index == active
                          ? styles.activeSelectText
                          : styles.selectText
                      }>
                      {val.source}
                    </Text>
                    <Text
                      style={
                        index == active
                          ? styles.activeSelectText
                          : styles.selectText
                      }>
                      {val.date}
                    </Text>
                  </TouchableOpacity>
                </>
              );
            })}
          </View>
        </View>
        <View style={styles.paymentContainer}>
          <Text style={styles.international}>Payment Method</Text>
          {deliveryOption.map((val, index) => {
            return (
              <>
                <TouchableOpacity
                  style={styles.method}
                  key={index}
                  onPress={() => setCheck(index)}>
                  <Icon
                    name={val.icon}
                    style={index == check ? styles.icon : styles.inActiveIcon}
                  />
                  <View style={styles.inside}>
                    <Text style={styles.paymentName}>{val.method}</Text>
                    <Text>{val.desc}</Text>
                  </View>
                </TouchableOpacity>
              </>
            );
          })}
        </View>
        <View style={styles.paymentContainer}>
          <Text style={styles.international}>Order Summary</Text>
          <View style={styles.prices}>
            <Text style={styles.text}>item(s) Subtotal</Text>
            <Text style={styles.text}>$600</Text>
          </View>
          <View style={styles.prices}>
            <Text style={styles.text}>Shipping Fee</Text>
            <Text style={styles.text}>$100</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.prices}>
            <Text style={styles.text}>Voucher</Text>
            <Text style={styles.text1}>Unavailable</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.prices}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>$700</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 4,
  },
  home: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 3,
  },
  input: {
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#999999',
    borderRadius: 3,
  },
  itemCount: {
    flexDirection: 'row',
    marginTop: 20,
  },
  CN: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    width: 60,
  },
  count: {
    color: '#999999',
    fontSize: 20,
    fontWeight: 'bold',
  },
  line: {
    backgroundColor: '#999999',
    height: 1,
    marginTop: 10,
  },
  cartItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
    fontSize: 13,
  },
  variationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 400 / 2,
  },
  price: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#272727',
  },
  cartContainer: {
    padding: 8,
  },
  international: {
    color: '#272727',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  selection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  select: {
    borderColor: '#999999',
    borderWidth: 2,
    padding: 8,
  },
  selectText: {
    color: '#999999',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeSelect: {
    borderColor: '#CD2047',
    borderWidth: 2,
    padding: 8,
  },
  activeSelectText: {
    color: '#CD2047',
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentContainer: {
    borderWidth: 1,
    borderColor: '#272727',
    marginTop: 10,
    padding: 8,
  },
  method: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    color: '#ffffff',
    fontSize: 20,
    backgroundColor: '#CD2047',
    height: 20,
    width: 20,
    borderRadius: 400 / 2,
  },
  inActiveIcon: {
    borderWidth: 1,
    borderColor: '#272727',
    height: 20,
    width: 20,
    borderRadius: 400 / 2,
    fontSize: 20,
    color: 'white',
  },
  inside: {
    width: 280,
  },
  paymentName: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  prices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#272727',
    fontSize: 18,
    marginTop: 7,
    marginBottom: 7,
  },
  text1: {
    color: '#999999',
    fontSize: 18,
    marginTop: 7,
    marginBottom: 7,
    fontWeight: 'bold',
  },
});

export default PlaceOrder;
