import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import pic from '../../assets/pic.jpeg';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import ProductList from './ProductList';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.text}>E-Commerce Store</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Image source={pic} style={styles.pic} />
        </TouchableOpacity>
      </View>
      <View style={styles.search}>
        <View style={styles.searchBar}>
          <Icon name="search1" style={styles.icon} />
          <TextInput
            placeholder="What are you looking for!"
            style={{paddingLeft: 10}}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.product}
        showsVerticalScrollIndicator={false}>
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </ScrollView>
    </View>
  );
};
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: height,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#CD2047',
    position: 'relative',
    top: 6,
  },
  button: {
    height: 50,
    width: 50,
    borderWidth: 3,
    borderColor: '#CD2047',
    borderRadius: 400 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pic: {
    width: 40,
    height: 40,
    borderRadius: 400 / 2,
  },
  search: {
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#e6e8eb',
    width: width - 30,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 30,
  },
  icon: {
    fontSize: 24,
    position: 'relative',
    top: 10,
  },
  product: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 8,
  },
});

export default Home;
