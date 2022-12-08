import React from 'react';
import {View, StyleSheet, Text, Dimensions, ScrollView} from 'react-native';

const Comments = () => {
  return (
    <View>
      <Text style={styles.review}>22 Reviews</Text>
      <View style={styles.line}></View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.name}>
          Hamza Siddique - <Text style={styles.date}>02/02/2022</Text>
        </Text>
        <Text style={styles.comment}>
          "Smells nice, not sticky at all. Wil buy again"
        </Text>
        <View style={styles.line}></View>
        <Text style={styles.name}>
          Hamza Siddique - <Text style={styles.date}>02/02/2022</Text>
        </Text>
        <Text style={styles.comment}>
          "Smells nice, not sticky at all. Wil buy again"
        </Text>
        <View style={styles.line}></View>
        <Text style={styles.name}>
          Hamza Siddique - <Text style={styles.date}>02/02/2022</Text>
        </Text>
        <Text style={styles.comment}>
          "Smells nice, not sticky at all. Wil buy again"
        </Text>
        <View style={styles.line}></View>
        <Text style={styles.name}>
          Hamza Siddique - <Text style={styles.date}>02/02/2022</Text>
        </Text>
        <Text style={styles.comment}>
          "Smells nice, not sticky at all. Wil buy again"
        </Text>
        <View style={styles.line}></View>
      </ScrollView>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  review: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#272727',
  },
  line: {
    borderWidth: 1,
    width: width - 33,
    borderColor: '#999999',
    marginTop: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#272727',
  },
  date: {
    color: '#999999',
    fontSize: 14,
  },
  comment: {
    marginTop: 8,
    marginBottom: 8,
  },
});

export default Comments;
