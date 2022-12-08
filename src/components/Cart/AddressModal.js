import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  Dimensions,
  Pressable,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

const AddressModal = ({show, setShow}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(!show);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.heading}>
              <Text style={styles.address}>Add New Address</Text>
              <Pressable onPress={() => setShow(!show)}>
                <Icon name="close" style={styles.icon} />
              </Pressable>
            </View>
            <View style={styles.line}></View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                <Text style={{color: 'red'}}>*</Text>Name
              </Text>
              <TextInput placeholder="Enter your name" style={styles.input} />
              <Text style={styles.label}>
                <Text style={{color: 'red'}}>*</Text>Phone
              </Text>
              <TextInput
                placeholder="+92"
                style={styles.input}
                keyboardType="number-pad"
              />
              <Text style={styles.label}>
                <Text style={{color: 'red'}}>*</Text>City
              </Text>
              <TextInput placeholder="Your city" style={styles.input} />
              <Text style={styles.label}>
                <Text style={{color: 'red'}}>*</Text>State
              </Text>
              <TextInput placeholder="Your state" style={styles.input} />
              <Text style={styles.label}>
                <Text style={{color: 'red'}}>*</Text>Address
              </Text>
              <TextInput
                placeholder="Enter your address"
                style={styles.input}
              />
              <Text style={styles.label}>
                <Text style={{color: 'red'}}>*</Text>Postal Code
              </Text>
              <TextInput placeholder="Zip Code" style={styles.input} />
              <Pressable style={styles.button} onPress={() => setShow(!show)}>
                <Text style={styles.btnText}>Save & Use</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width - 20,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  address: {
    color: '#272727',
    fontSize: 23,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 23,
    color: '#272727',
  },
  line: {
    backgroundColor: '#999999',
    height: 1,
    marginTop: 10,
    width: width - 73,
  },
  inputContainer: {},
  label: {
    fontWeight: '700',
    fontSize: 20,
    color: '#272727',
    marginTop: 20,
  },
  input: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#999999',
    height: 40,
    paddingLeft: 10,
    borderRadius: 4,
  },
  button: {
    width: width - 40,
    backgroundColor: '#7C12A1',
    width: '100%',
    alignItems: 'center',
    paddingTop: 11,
    paddingBottom: 11,
    marginTop: 20,
    borderRadius: 4,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AddressModal;
