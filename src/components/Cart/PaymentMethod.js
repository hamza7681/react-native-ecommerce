import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const PaymentMethod = () => {
  const [active, setActive] = useState(0);
  let paymentOpts = [{name: 'Master Card'}, {name: 'Visa Card'}];
  return (
    <View>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View>
          <Text style={styles.international}>
            Pay via credit card/debit card
          </Text>
          <View style={styles.methods}>
            {paymentOpts.map((val, index) => {
              return (
                <>
                  <TouchableOpacity
                    style={styles.insideMethod}
                    onPress={() => setActive(index)}>
                    <View style={styles.outside}>
                      <View
                        style={
                          index === active ? styles.inside : styles.inactive
                        }></View>
                    </View>
                    <Text style={styles.cardName}>{val.name}</Text>
                  </TouchableOpacity>
                </>
              );
            })}
          </View>
        </View>
        <View style={styles.paymentContainer}>
          <Text style={styles.inst}>Instructions</Text>
          <View style={styles.line}></View>
          <View style={styles.list}>
            <Text>{'\u2022'}</Text>
            <Text style={{flex: 1, paddingLeft: 5}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              arcu viverra sed lectus sagittis.
            </Text>
          </View>
          <View style={styles.list}>
            <Text>{'\u2022'}</Text>
            <Text style={{flex: 1, paddingLeft: 5}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              arcu viverra sed lectus sagittis.
            </Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.international}>Card Number</Text>
          <TextInput
            placeholder="card number"
            style={styles.cardInput}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.international}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.cardInput}
            keyboardType="email-address"
          />
        </View>
        <Text style={styles.policy}>
          By Clicking to Pay Securely I agree to these{' '}
          <Text style={{color: '#CD2047'}}>Terms and Conditions</Text>
        </Text>
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
  line: {
    backgroundColor: '#999999',
    height: 1,
    marginTop: 10,
  },
  international: {
    color: '#272727',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  paymentContainer: {
    borderWidth: 1,
    borderColor: '#272727',
    marginTop: 10,
    padding: 8,
  },
  methods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outside: {
    borderWidth: 2,
    borderColor: '#CD2047',
    height: 20,
    width: 20,
    borderRadius: 400 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inside: {
    borderWidth: 2,
    borderColor: '#CD2047',
    height: 13,
    width: 13,
    borderRadius: 10,
    backgroundColor: '#CD2047',
  },
  picContainer: {
    width: 140,
    borderWidth: 1,
  },
  pic: {
    width: 70,
    height: 70,
  },
  insideMethod: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '50%',
  },
  cardName: {
    fontWeight: 'bold',
    fontSize: 16,
    width: 100,
    marginLeft: 10,
  },
  inactive: {
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 10,
    backgroundColor: '#fffff',
  },
  inst: {
    color: '#272727',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  cardInput: {
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 3,
    paddingLeft: 10,
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 3,
  },
  policy: {
    fontSize: 18,
    textAlign: 'justify',
    color: '#272727',
    marginTop:10,
    marginBottom:10
  },
});

export default PaymentMethod;
